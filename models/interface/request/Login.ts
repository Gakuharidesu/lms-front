interface LoginRequest {
  email: string
  password: string
}

namespace LoginRequest {
  export function empty (): LoginRequest {
    return {
      email: '',
      password: ''
    }
  }
}

export { LoginRequest }
