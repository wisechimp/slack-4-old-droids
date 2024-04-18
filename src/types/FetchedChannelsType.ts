import ChannelType from "./ChannelType"

type FetchedChannelsType = {
  ok: boolean,
  channels: Array<ChannelType>,
  response_metadata: {
    next_cursor: string
  }
}

export default FetchedChannelsType