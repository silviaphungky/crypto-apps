import { useState } from 'react'
import { WalletApi } from 'services/wallet-api'
import { useQuery } from '@tanstack/react-query'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { IconSearch } from 'components/icons'
import { MarketFilter, MarketListItem } from './components'
import MarketPrice from './components/MarketPrice'

export interface SupportedChangesResponse {
  color: string
  currencyGroup: string
  currencySymbol: string
  decimal_point: number
  listingDate: string
  logo: string
  name: string
  wallets: Array<{
    blockchain: string
    blockchainName: string
    currencyGroup: string
    decimal_point: number
    explorer: string
    listingDate: string
    logo: string
    tokenSymbol: string
    tokenType: string
  }>
}

export interface Price {
  day: string
  latestPrice: string
  month: string
  pair: string
  week: string
  year: string
}

const MarketScreen = () => {
  const [dateRange, setDateRange] = useState<
    | {
        label: string
        value: string | number
      }
    | undefined
  >(undefined)

  const {
    data: supportedCurrencies = { payload: [] },
    isLoading: isLoadingSupportedCurrencies,
  } = useQuery<{
    payload: Array<SupportedChangesResponse>
  }>({
    queryKey: ['supportedCurrencies'],
    queryFn: WalletApi.getSupportedChanges,
  })

  const tokens = supportedCurrencies.payload || []

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Market</Text>
        <IconSearch />
      </View>
      <MarketFilter dateRange={dateRange} setDateRange={setDateRange} />
      <FlatList
        data={tokens}
        renderItem={({ item }) => {
          if (item.currencyGroup === 'IDR') return
          return (
            <MarketListItem item={item}>
              <MarketPrice
                symbol={item.currencySymbol.toLowerCase()}
                dateRange={dateRange}
              />
            </MarketListItem>
          )
        }}
        keyExtractor={(item) => item.currencySymbol}
      />
    </SafeAreaView>
  )
}

export default MarketScreen

const styles = StyleSheet.create({
  pageTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  currency: {
    paddingLeft: 16,
  },
  textBold: {
    fontWeight: '600',
  },
  textGray: {
    color: '#929396',
  },
  textRight: {
    textAlign: 'right',
  },
})
