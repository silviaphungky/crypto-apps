export const TradeApi = {
  getPriceChanges: async () => {
    const response = await fetch(
      'https://api.pintu.co.id/v2/trade/price-changes'
    )
    const data = await response.json()

    return data
  },
}
