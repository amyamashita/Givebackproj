import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import HawaiianLeiTracker from './src/components/HawaiianLeiTracker';
import LeiSelectionScreen from './src/components/LeiSelectionScreen';
import UserProfileScreen from './src/components/UserProfileScreen';
import MyLeiCollectionScreen from './src/components/MyLeiCollectionScreen';
import LeaderboardScreen from './src/components/LeaderboardScreen';
import IlimaLeiScreen from './src/components/IlimaLeiScreen';
import MaileLeiScreen from './src/components/MaileLeiScreen';
import PakalanaLeiScreen from './src/components/PakalanaLeiScreen';
import PlumeriaLeiScreen from './src/components/PlumeriaLeiScreen';
import PuakenikeniLeiScreen from './src/components/PuakenikeniLeiScreen';
import OrchidLeiScreen from './src/components/OrchidLeiScreen';
import PikakeLeiScreen from './src/components/PikakeLeiScreen';
import CarnationLeiScreen from './src/components/CarnationLeiScreen';
import { Ionicons } from 'react-native-vector-icons';
import AddFriendsScreen from './src/components/AddFriendsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LeiSelectionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lei Selection" component={LeiSelectionScreen} />
      <Stack.Screen name="My Lei Collection" component={MyLeiCollectionScreen} />
      <Stack.Screen name="Ilima Lei" component={IlimaLeiScreen} />
      <Stack.Screen name="Maile Lei" component={MaileLeiScreen} />
      <Stack.Screen name="Pakalana Lei" component={PakalanaLeiScreen} />
      <Stack.Screen name="Plumeria Lei" component={PlumeriaLeiScreen} />
      <Stack.Screen name="Puakenikeni Lei" component={PuakenikeniLeiScreen} />
      <Stack.Screen name="Orchid Lei" component={OrchidLeiScreen} />
      <Stack.Screen name="Pikake Lei" component={PikakeLeiScreen} />
      <Stack.Screen name="Carnation Lei" component={CarnationLeiScreen} />
    </Stack.Navigator>
  );
}

function LeiCollectionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Lei Collection" component={MyLeiCollectionScreen} />
      <Stack.Screen name="Ilima Lei" component={IlimaLeiScreen} />
      <Stack.Screen name="Maile Lei" component={MaileLeiScreen} />
      <Stack.Screen name="Pakalana Lei" component={PakalanaLeiScreen} />
      <Stack.Screen name="Plumeria Lei" component={PlumeriaLeiScreen} />
      <Stack.Screen name="Puakenikeni Lei" component={PuakenikeniLeiScreen} />
      <Stack.Screen name="Orchid Lei" component={OrchidLeiScreen} />
      <Stack.Screen name="Pikake Lei" component={PikakeLeiScreen} />
      <Stack.Screen name="Carnation Lei" component={CarnationLeiScreen} />
    </Stack.Navigator>
  );
}

function UserProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User Profile" component={UserProfileScreen} />
      <Stack.Screen name="Add Friends" component={AddFriendsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    QuicksandRegular: require('./src/assets/fonts/Quicksand-Regular.ttf'),
    QuicksandBold: require('./src/assets/fonts/Quicksand-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#6a1b9a" />
      </View>
    );
  }

  const CustomText = ({ style, ...props }) => (
    <Text style={[{ fontFamily: 'QuicksandRegular' }, style]} {...props} />
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Lei Selection') {
              iconName = 'flower';
            } else if (route.name === 'Tracker') {
              iconName = 'walk';
            } else if (route.name === 'Collection') {
              iconName = 'albums';
            } else if (route.name === 'Leaderboard') {
              iconName = 'trophy';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6a1b9a',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Profile" component={UserProfileStack} />
        <Tab.Screen name="Lei Selection" component={LeiSelectionStack} />
        <Tab.Screen name="Tracker" component={HawaiianLeiTracker} />
        <Tab.Screen name="Collection" component={LeiCollectionStack} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}