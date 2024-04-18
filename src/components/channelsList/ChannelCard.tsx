import paths from "@/paths"
import ChannelType from "@/types/ChannelType"
import Link from "next/link"

type ChannelCardProps = {
  channel: ChannelType
}

const ChannelCard = ({ channel }: ChannelCardProps) => {
  const { id, name, is_member, purpose } = channel

  if (is_member)

  return (
    <div>
      <Link href={paths.channelShow(id)}>
        <p>{name}</p>
        <p>{purpose.value}</p>
      </Link>
    </div>
  )
}

export default ChannelCard