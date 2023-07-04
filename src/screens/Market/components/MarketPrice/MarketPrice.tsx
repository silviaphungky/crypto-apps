import { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { TradeApi } from 'services/trade-api'
import arrayToObject from 'utils/arrayToObject'

const MarketPrice = ({
  symbol,
  dateRange,
}: {
  symbol: string
  dateRange?: { label: string; value: string | number }
}) => {
  const priceRef = useRef()

  const { data, isLoading, error } = useQuery({
    queryKey: ['tokens'],
    queryFn: TradeApi.getPriceChanges,
    refetchInterval: 1000,
  })

  useEffect(() => {
    if (!isLoading) {
      priceRef.current = data.payload
    }
  }, [data])

  const textColor = (price: string) => {
    if (Number(price) === 0) return styles.textBlack
    else if (Number(price) > 0) return styles.textBullish
    else return styles.textBearish
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pricesChanges = !isLoading ? data.payload : []

  const pricesChangesObject =
    arrayToObject(pricesChanges, (item) => item.pair.split('/idr')[0]) || {}

  const price = pricesChangesObject[symbol] || {}

  const prevPriceChangesObject = priceRef.current
    ? arrayToObject(priceRef.current, (item) => item.pair.split('/idr')[0])
    : {}
  const prevChangesPrice = prevPriceChangesObject[symbol] || {}

  const deltaLatestPrice = String(
    Number(price.latestPrice) - Number(prevChangesPrice.latestPrice) || '0'
  )
  return (
    <View>
      <Text style={{ ...styles.latestPrice, ...textColor(deltaLatestPrice) }}>
        {`${new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(Number(price.latestPrice || 0))}`}
      </Text>
      <Text
        style={{
          ...styles.textRight,
          ...textColor(price[dateRange?.value || 'day']),
          ...styles.textBold,
          fontSize: 14,
        }}
      >{`${price[dateRange?.value || 'day'] || 0}%`}</Text>
    </View>
  )
}

export default MarketPrice

const styles = StyleSheet.create({
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
  textBullish: {
    color: '#25a764',
  },
  textBearish: {
    color: '#e54040',
  },
  textBlack: {
    color: 'black',
  },
})
