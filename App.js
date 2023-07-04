import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet, StatusBar, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MarketScreen from './src/screens/Market'
import HomeScreen from './src/screens/Home'
import DiscoverScreen from './src/screens/Discover'
import WalletScreen from './src/screens/Wallet'
import AccountScreen from './src/screens/Account'
import IconHome from 'icons/IconHome'
import { IconChart, IconNews, IconUser, IconWallet } from 'components/icons'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
})

const Tab = createBottomTabNavigator()

const route = {
  home: 'Home',
  discover: 'Discover',
  market: 'Market',
  wallet: 'Wallet',
  account: 'Account',
}

export default function App() {
  const iconMapping = ({ name, focused }) => {
    let icon = ''

    switch (name) {
      case route.home:
        icon = focused ? <IconHome fill /> : <IconHome />
        break
      case route.discover:
        icon = focused ? <IconNews fill /> : <IconNews />
        break
      case route.market:
        icon = focused ? <IconChart fill /> : <IconChart />
        break
      case route.wallet:
        icon = focused ? <IconWallet fill /> : <IconWallet />
        break
      case route.account:
        icon = focused ? <IconUser fill /> : <IconUser />
        break
      default:
        icon = focused ? <IconHome fill /> : <IconHome />
    }

    return icon
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <Tab.Navigator
            initialRouteName={route.market}
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                const name = route.name

                return iconMapping({ name, focused })
              },
              tabBarLabel: ({ focused }) => {
                const name = route.name
                return (
                  <Text
                    style={{
                      fontWeight: focused ? '600' : '400',
                      textTransform: 'capitalize',
                    }}
                  >
                    {name}
                  </Text>
                )
              },
            })}
          >
            <Tab.Screen name={route.home} component={HomeScreen} />
            <Tab.Screen name={route.discover} component={DiscoverScreen} />
            <Tab.Screen name={route.market} component={MarketScreen} />
            <Tab.Screen name={route.wallet} component={WalletScreen} />
            <Tab.Screen name={route.account} component={AccountScreen} />
          </Tab.Navigator>
        </View>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
