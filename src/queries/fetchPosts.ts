import FetchMessagesType from "@/types/FetchedMessagesType"

const fetchPosts = async (id: string): Promise<FetchMessagesType> => {
  const token = process.env.SLACK_BOT_TOKEN
  const conversationHeaders = new Headers()
  conversationHeaders.set("Authorization", `Bearer ${token}`)
  const res = await fetch(
    `https://slack.com/api/conversations.history?channel=${id}`,
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

export default fetchPosts