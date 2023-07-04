export const WalletApi = {
  getSupportedChanges: async () => {
    const response = await fetch(
      'https://api.pintu.co.id/v2/wallet/supportedCurrencies'
    )

    const data = await response.json()
    return data
  },
}
