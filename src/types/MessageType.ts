type MessageType = {
  user: string,
  type: string,
  ts: string,
  client_msg_id?: string,
  text: string,
  team?: string,
  blocks?: Array<string>,
  subtype?: string
  inviter?: string
}

export default MessageType