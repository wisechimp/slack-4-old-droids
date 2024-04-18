type ChannelType = {
  id: string
  name: string
  is_channel: boolean
  is_group: boolean
  is_im: boolean
  is_mpim: boolean
  is_private: boolean
  created: number
  is_archived: boolean
  is_general: boolean
  unlinked: number
  name_normalized: string
  is_shared: boolean
  is_org_shared: boolean
  is_pending_ext_shared: boolean
  pending_shared: Array<string>
  context_team_id: string
  updated: number
  parent_conversation: string
  creator: string
  is_ext_shared: boolean
  shared_team_ids: Array<string>
  pending_connected_team_ids: Array<string>
  is_member: boolean
  topic: {
    value: string
    creator: string
    last_set: number
  }
  purpose: {
    value: string
    creator: string
    last_set: number
  }
  properties: {
    use_case: string
  }
  previous_names: Array<string>
  num_members: number
}

export default ChannelType