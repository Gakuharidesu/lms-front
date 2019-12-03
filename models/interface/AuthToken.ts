export default interface AuthToken {
  accessToken?: string
  expiresIn?: number
  redirectTo?: string
  tokenType?: 'bearer'
}
