import MessageType from "./MessageType"

type FetchMessagesType = {
  ok: boolean,
  messages: Array<MessageType>
}

export default FetchMessagesType