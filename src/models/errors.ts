export enum ErrorTypes {
  // Auth
  API_KEY_IS_NOT_SPECIFIED = 'api_key_is_not_specified',
  API_KEY_IS_INCORRECT = 'api_key_is_incorrect',
  // Others
  UNKNOWN = 'unknown',
  NOT_FOUND = 'not_found'
}

type ErrorMessages = {
  [key in ErrorTypes]: string
}

export const errorMessages: ErrorMessages = {
  //
  [ErrorTypes.API_KEY_IS_NOT_SPECIFIED]: 'common:errors.somethingWentWrong',
  [ErrorTypes.API_KEY_IS_INCORRECT]: 'common:errors.somethingWentWrong',
  // OTHERS
  [ErrorTypes.UNKNOWN]: 'common:errors.somethingWentWrong',
  [ErrorTypes.NOT_FOUND]: 'common:errors.notFound'
}

export const unauthorizedErrorTypes = [
  ErrorTypes.API_KEY_IS_NOT_SPECIFIED,
  ErrorTypes.API_KEY_IS_INCORRECT
]
