/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomAxiosError } from 'models/common/api'

export const isAxiosError = (error: any): error is CustomAxiosError => {
  return 'response' in error
}
