import PostsList from "@/components/postsList/PostsList"

type ChannelPageProps = {
  params: {
    id: string
  }
}

const ChannelPage = ({ params }: ChannelPageProps) => {
  const { id } = params
  return(
    <main>
      <h1>
        <PostsList id={id} />
      </h1>
    </main>
  )
}

export default ChannelPage