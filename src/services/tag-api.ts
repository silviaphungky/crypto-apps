export const TagApi = {
  get: async () => {
    const response = await fetch('/api/tags')
    const data = await response.json()

    return data
  },
}
