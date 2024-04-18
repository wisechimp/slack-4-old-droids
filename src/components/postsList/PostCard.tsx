import fetchUser from "@/queries/fetchUser"
import MessageType from "@/types/MessageType"

type PostCardProps = {
  message: MessageType
}

const PostCard = async ({ message }: PostCardProps) => {
  const { user, text } = message
  const userData = await fetchUser(user)
  const { name } = userData
  return (
    <div>
      <p>{name}</p>
      <p>{text}</p>
    </div>
  )
}

export default PostCard