interface SwipeResult {
  id: number | null
  userId: number | null
  partnerId: number | null
  result: boolean
}

namespace SwipeResult {
  export function empty (): SwipeResult {
    return {
      id: null,
      userId: null,
      partnerId: null,
      result: false
    }
  }
}

export { SwipeResult }
