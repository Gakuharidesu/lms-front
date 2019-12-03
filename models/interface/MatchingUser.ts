interface MatchingUser {
  id: number | null
}

namespace MatchingUser {
  export function empty (): MatchingUser {
    return {
      id: 0
    }
  }
}

export { MatchingUser }
