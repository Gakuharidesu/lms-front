import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { MatchingUserListGetRequest } from '@/models/interface/request/MatchingUser'
import Pagination from '@/models/interface/Pagination'
import { Utility } from '@/models/utility/Utility'

export const state: () => MatchingUserListGetRequest = () =>
MatchingUserListGetRequest.empty()

export const getters: GetterTree<
  MatchingUserListGetRequest,
  MatchingUserListGetRequest
> = {}

export const mutations: MutationTree<MatchingUserListGetRequest> = {
  setPagination(state: MatchingUserListGetRequest, payload: Pagination) {
    state.page = payload.page
    state.sortBy = payload.sortBy
    state.rowsPerPage = payload.rowsPerPage
    state.descending = payload.descending
    state.sort = Utility.convertSortValue(payload.descending, payload.sortBy)
  }
}

export const actions: ActionTree<
  MatchingUserListGetRequest,
  MatchingUserListGetRequest
> = {}
