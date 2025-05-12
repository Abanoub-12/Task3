import { isAxiosError } from 'axios'
import { errorMessages, ErrorTypes } from 'models/errors'

export const getErrorMessage = (type?: string) => {
  const errorType = Object.values(ErrorTypes).find(errorType => errorType === type)
  return errorType ? errorMessages[errorType] : errorMessages.unknown
}

export const getErrorType = (error: unknown): string => {
  if (isAxiosError(error)) {
    const errorData = error.response?.data
    if (errorData && 'type' in errorData) {
      return errorData.type
    }
  }
  return ErrorTypes.UNKNOWN
}
