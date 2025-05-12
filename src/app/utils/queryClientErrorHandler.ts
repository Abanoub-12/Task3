import { Paths } from 'constants/paths'
import { Query, QueryKey } from '@tanstack/react-query'

export const queryClientErrorHandler = async (
  type: string,
  query?: Query<unknown, unknown, unknown, QueryKey>
) => {
  if (query?.meta?.errCode) {
    location.href = Paths.NOT_FOUND
    return
  }
}
