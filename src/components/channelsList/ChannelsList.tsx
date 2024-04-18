import fetchChannels from "@/queries/fetchChannels"
import ChannelCard from "./ChannelCard"

const ChannelList = async () => {
  const data = await fetchChannels()
  const { channels } = data

  const renderedChannels = channels.map((channel) => {
    const { id } = channel
    return (
      <ChannelCard key={id} channel={channel} />
    )
  })

  return <div>{renderedChannels}</div>
}

export default ChannelList