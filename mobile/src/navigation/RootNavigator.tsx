import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@screens/home/HomeScreen';
import { ExploreScreen } from '@screens/explore/ExploreScreen';
import { WalletScreen } from '@screens/wallet/WalletScreen';
import { MessagesScreen } from '@screens/messages/MessagesScreen';
import { ProfileScreen } from '@screens/profile/ProfileScreen';
import { SignInScreen } from '@screens/auth/SignInScreen';
import { SignUpScreen } from '@screens/auth/SignUpScreen';
import { CheckInScreen } from '@screens/checkin/CheckInScreen';
import { ConnectionsScreen } from '@screens/connections/ConnectionsScreen';
import { colors } from '@theme/colors';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  CheckIn: undefined;
  Connections: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { backgroundColor: colors.surface },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Main" component={MainTabs} />
      <RootStack.Screen name="CheckIn" component={CheckInScreen} />
      <RootStack.Screen name="Connections" component={ConnectionsScreen} />
    </RootStack.Navigator>
  );
}
