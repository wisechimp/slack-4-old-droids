import UserType from "./UserType"

type FetchedUsersType = {
  ok: boolean,
  members: Array<UserType>,
  cache_ts: number,
  response_metadata: {
    next_cursor: string
  }
}

export default FetchedUsersType