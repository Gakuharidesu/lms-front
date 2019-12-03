interface Login {
  access_token: string,
  expires_in: number,
  token_type: string
}

namespace Login {
  export function empty (): Login {
    return {
      access_token: '',
      expires_in: 0,
      token_type: ''
    }
  }
}

export { Login }
