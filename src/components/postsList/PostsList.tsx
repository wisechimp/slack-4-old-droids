import fetchPosts from "@/queries/fetchPosts"
import PostCard from "./PostCard"

type PostsListProps = {
  id: string
}

const PostsList = async ({ id }: PostsListProps) => {
  const data = await fetchPosts(id)
  const { messages } = data

  const renderedMessages = messages.map((message) => {
    return (
      <PostCard key={`${message.user} + ${message.ts}`} message={message} />
    )
  })

  return(
    <div>
      {renderedMessages}
    </div>
  )
}

export default PostsList