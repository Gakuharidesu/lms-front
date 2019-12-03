interface User {
  id: number | null
  name: string
  password: string
  email: string
  publicStatus: number | null
  description: string
  updatedAt?: string
  errors?: { [Key: string]: string }
}

namespace User {
  export function empty (): User {
    return {
      id: null,
      name: '',
      password: '',
      email: '',
      publicStatus: 0,
      description: '',
      updatedAt: ''
    }
  }
}

export { User }
