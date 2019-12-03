import { User } from '~/models/interface/User'

interface UserSearchRequest extends User {}
interface UserGetRequest extends User {}
interface UserPutRequest extends User {}
interface UserPostRequest extends User {}

export { UserPutRequest, UserPostRequest, UserSearchRequest }
