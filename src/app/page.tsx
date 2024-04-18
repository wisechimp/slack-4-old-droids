import ChannelList from "@/components/channelsList/ChannelsList"

const Home = async () => {
  return (
    <main>
      <div>
        <h1>
          Welcome to Slack for Old Droids
        </h1>
        <ChannelList />
      </div>
    </main>
  )
}

export default Home
