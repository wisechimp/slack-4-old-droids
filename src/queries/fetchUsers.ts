import FetchedUsersType from "@/types/FetchedUsersType"

const fetchUsers = async (): Promise<FetchedUsersType> => {
  const token = process.env.SLACK_BOT_TOKEN
  const conversationHeaders = new Headers()
  conversationHeaders.set("Authorization", `Bearer ${token}`)
  const res = await fetch(
    `https://slack.com/api/users.list`,
    {
      method: "GET",
      headers: conversationHeaders,
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default fetchUsers
