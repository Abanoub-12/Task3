import { excludedErrorCodes, excludedErrorPaths } from 'constants/excludedErrors'
import { AxiosResponse, isAxiosError } from 'axios'
import { camelizeKeys } from 'humps'
import { t } from 'i18next'
import { getErrorMessage, getErrorType } from 'utils/errors'
import { getToastMessage } from 'utils/toastMessage'

export const interceptors = {
  onSuccess: (response: AxiosResponse) => {
    if (response.data && response.headers['content-type'].includes('application/json')) {
      response.data = camelizeKeys(response.data)
    }
    return response.data ? response.data : response
  },
  onError: (error: Error) => {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status
      const requestUrl = error.config?.url

      if (
        statusCode &&
        requestUrl &&
        !excludedErrorPaths[requestUrl]?.includes(statusCode) &&
        !excludedErrorCodes.includes(statusCode)
      ) {
        const type = getErrorType(error)

        const message = t(getErrorMessage(type))

        getToastMessage(message)
      }
    }
    Promise.reject(error)
  }
}
