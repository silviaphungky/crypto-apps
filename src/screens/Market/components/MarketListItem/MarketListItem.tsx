import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MarketTokenIcon from '../MarketTokenIcon'
import { SupportedChangesResponse } from 'screens/Market/MarketScreen'

interface Props {
  item: SupportedChangesResponse
  children?: ReactNode
}

const MarketListItem = ({ item, children }: Props) => {
  return (
    <View style={styles.list} key={item.currencySymbol}>
      <View style={styles.flex}>
        <MarketTokenIcon url={item.logo} color={item.color} />
        <View style={styles.currency}>
          <Text style={styles.textCurrencyName}>{item.name}</Text>
          <Text style={styles.textGray}>{item.currencySymbol}</Text>
        </View>
      </View>
      <View>{children}</View>
    </View>
  )
}

export default MarketListItem

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1,
    padding: 16,
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
  latestPrice: {
    fontWeight: '600',
    textAlign: 'right',
    fontSize: 16,
  },
  currency: {
    paddingLeft: 16,
  },
  textCurrencyName: {
    fontWeight: '600',
    fontSize: 16,
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
