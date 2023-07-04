export const TokenIconApi = {
  get: async (url: string) => {
    const response = await fetch('/api/icon', {
      method: 'POST',
      body: JSON.stringify({ url }),
    })
    const icon = await response.text()
    console.log(icon, 'ad')
    return icon
  },
}
