import { Dispatch, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Select } from 'components'

interface Props {
  dateRange: { label: string; value: string | number }
  setDateRange: Dispatch<{ label: string; value: string | number }>
}

export const SORT_BY_OPTIONS = [
  { label: '24 JAM', value: 'day' },
  { label: '1 MGG', value: 'week' },
  { label: '1 BLN', value: 'month' },
  { label: '1 THN', value: 'year' },
]

const MarketFilter = ({ dateRange, setDateRange }: Props) => {
  return (
    <View style={styles.filter}>
      <View>
        <Text style={{ ...styles.textBold, fontSize: 13 }}>Sort By</Text>
      </View>
      <View>
        <Select
          selectedOption={dateRange}
          options={SORT_BY_OPTIONS}
          onSelect={setDateRange}
        />
      </View>
    </View>
  )
}

export default MarketFilter

const styles = StyleSheet.create({
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  textBold: {
    fontWeight: '600',
  },
})
