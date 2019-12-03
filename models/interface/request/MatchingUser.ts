import Pagination from '@/models/interface/Pagination'

interface MatchingUserListGetRequest extends Pagination {}

namespace MatchingUserListGetRequest {
  export function empty (): MatchingUserListGetRequest {
    return {
      descending: true,
      sortBy: 'createdAt',
      sort: 'createdAt',
      page: 1,
      totalItems: 0,
      rowsPerPage: 30,
      lastPage: 0
    }
  }
}

export { MatchingUserListGetRequest }
