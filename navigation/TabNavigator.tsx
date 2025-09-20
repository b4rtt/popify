import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useMemo } from 'react';
import { View } from 'react-native';

import Colors from '@/constants/Colors';
import { TabBar } from '@/components/ui/TabBar';
import FavoritesScreen from '@/screens/main/FavoritesScreen';
import HomeScreen from '@/screens/main/HomeScreen';
import ProfileScreen from '@/screens/main/ProfileScreen';
import WalletScreen from '@/screens/main/WalletScreen';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function TabNavigator() {
  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: '#94a3b8',
      tabBarShowLabel: false,
    }),
    [],
  );

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Discover' }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Saved' }} />
        <Tab.Screen name="Wallet" component={WalletScreen} options={{ title: 'Wallet' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Tab.Navigator>
    </View>
  );
}
