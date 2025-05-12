import { AxiosError } from 'axios'

export interface SuccessResponse {
  success: true
}

export interface ErrorResponse {
  type: string
  message: string
}

export type CustomAxiosError = AxiosError<ErrorResponse, ErrorResponse>

export interface ImageDTO {
  image: string
}
