const paths = {
  home() {
    return "/"
  },
  channelShow(channelId: string) {
    return `/channels/${channelId}`
  }
}

export default paths