import UserType from "@/types/UserType"
import fetchUsers from "./fetchUsers"

const fetchUser = async (id: string): Promise<UserType> => {
  const users = await fetchUsers()
  const { members } = users
  const findUser = (id: string) => {
    return members.filter(member => member.id === id).pop()
  }
  const user = findUser(id)
  return user!
}

export default fetchUser