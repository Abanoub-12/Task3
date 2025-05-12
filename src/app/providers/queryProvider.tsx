/* eslint-disable react/display-name */
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClientErrorHandler } from 'app/utils/queryClientErrorHandler'
import { isAxiosError, AxiosError } from 'axios'
import { ComponentType, Suspense, useState } from 'react'
import { parseRetryAfter } from 'utils/parseRetryAfter'

const withQueryProvider =
  (WrappedComponent: ComponentType) =>
  ({ ...props }) => {
    const [queryClient] = useState(
      new QueryClient({
        queryCache: new QueryCache({
          onError: async (error, query) => {
            if (isAxiosError(error) && error.response?.data.type) {
              await queryClientErrorHandler(error.response?.data.type, query)
            } else {
              console.error('Unhandled non axios error in queryCash', error)
            }
          }
        }),
        mutationCache: new MutationCache({
          onError: async error => {
            if (isAxiosError(error) && error.response?.data.type) {
              await queryClientErrorHandler(error.response?.data.type)
            } else {
              console.error('Unhandled non axios error in mutationCash', error)
            }
          }
        }),
        defaultOptions: {
          queries: {
            staleTime: 3 * 60 * 1000,
            refetchOnWindowFocus: false,
            retry: (failureCount: number, error: Error) => {
              const axiosError = error as AxiosError

              if (
                axiosError?.response?.status === 429 &&
                axiosError?.response?.headers['retry-after']
              ) {
                return true
              }
              return false
            },
            retryDelay: (attempt: number, error: Error) => {
              const axiosError = error as AxiosError
              const retryAfter = axiosError?.response?.headers['retry-after']

              if (retryAfter) {
                const retryAfterMs = parseRetryAfter(retryAfter)
                return retryAfterMs
              }
              return 200
            }
          },
          mutations: {
            retry: (failureCount: number, error: Error) => {
              const axiosError = error as AxiosError

              if (
                axiosError?.response?.status === 429 &&
                axiosError?.response?.headers['retry-after']
              ) {
                return true
              }
              return false
            },
            retryDelay: (attempt: number, error: Error) => {
              const axiosError = error as AxiosError
              const retryAfter = axiosError?.response?.headers['retry-after']

              if (retryAfter) {
                const retryAfterMs = parseRetryAfter(retryAfter)
                return retryAfterMs
              }
              return 200
            }
          }
        }
      })
    )

    return (
      <Suspense fallback="">
        <QueryClientProvider client={queryClient}>
          <WrappedComponent {...props} />
          {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
        </QueryClientProvider>
      </Suspense>
    )
  }

export default withQueryProvider
