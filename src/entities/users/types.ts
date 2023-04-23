export interface UserCreateDto {
}

export interface UserCreateResponseDto {

}

export interface UserSignInDto {
  email: string
  password: string
}

export interface UserSignInResponseDto {
  refreshToken: string
  accessToken: string
}
