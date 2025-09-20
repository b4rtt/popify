import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreatePopupBasicInfoScreen from '@/screens/creation/BasicInfoScreen';
import CreatePopupLocationScreen from '@/screens/creation/LocationScreen';
import CreatePopupPublishScreen from '@/screens/creation/PublishScreen';
import CreatePopupTimeWindowScreen from '@/screens/creation/TimeWindowScreen';
import CreateBitcoinAccount1Screen from '@/screens/auth/CreateAccountScreen1';
import CreateBitcoinAccount2Screen from '@/screens/auth/CreateAccountScreen2';
import HelpScreen from '@/screens/misc/HelpScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import NotificationDetailsScreen from '@/screens/misc/NotificationDetailsScreen';
import NotificationsScreen from '@/screens/misc/NotificationsScreen';
import PaymentScanScreen from '@/screens/misc/PaymentScanScreen';
import PopupDetailsScreen from '@/screens/misc/PopupDetailsScreen';
import RatingScreen from '@/screens/misc/RatingScreen';
import DiscoverScreen from '@/screens/onboarding/DiscoverScreen';
import GetStartedScreen from '@/screens/onboarding/GetStartedScreen';
import HostScreen from '@/screens/onboarding/HostScreen';
import PaymentsScreen from '@/screens/onboarding/PaymentsScreen';
import WelcomeScreen from '@/screens/onboarding/WelcomeScreen';
import HostDashboardAnalyticsScreen from '@/screens/host/AnalyticsScreen';
import HostDashboardEditScreen from '@/screens/host/EditEventScreen';
import HostDashboardOverviewScreen from '@/screens/host/DashboardScreen';
import FavoritesAltScreen from '@/screens/main/FavoritesAltScreen';
import TabNavigator from './TabNavigator';
import {
  AuthStackParamList,
  CreatePopupStackParamList,
  HostDashboardStackParamList,
  OnboardingStackParamList,
  RootStackParamList,
} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const CreatePopupStack = createNativeStackNavigator<CreatePopupStackParamList>();
const HostDashboardStack = createNativeStackNavigator<HostDashboardStackParamList>();

function OnboardingNavigator() {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen name="OnboardingWelcome" component={WelcomeScreen} />
      <OnboardingStack.Screen name="OnboardingGetStarted" component={GetStartedScreen} />
      <OnboardingStack.Screen name="OnboardingDiscover" component={DiscoverScreen} />
      <OnboardingStack.Screen name="OnboardingHost" component={HostScreen} />
      <OnboardingStack.Screen name="OnboardingPayments" component={PaymentsScreen} />
    </OnboardingStack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="CreateBitcoinAccount1" component={CreateBitcoinAccount1Screen} />
      <AuthStack.Screen name="CreateBitcoinAccount2" component={CreateBitcoinAccount2Screen} />
    </AuthStack.Navigator>
  );
}

function CreatePopupNavigator() {
  return (
    <CreatePopupStack.Navigator screenOptions={{ headerShown: false }}>
      <CreatePopupStack.Screen name="CreatePopupBasicInfo" component={CreatePopupBasicInfoScreen} />
      <CreatePopupStack.Screen name="CreatePopupLocation" component={CreatePopupLocationScreen} />
      <CreatePopupStack.Screen name="CreatePopupTimeWindow" component={CreatePopupTimeWindowScreen} />
      <CreatePopupStack.Screen name="CreatePopupPublish" component={CreatePopupPublishScreen} />
    </CreatePopupStack.Navigator>
  );
}

function HostDashboardNavigator() {
  return (
    <HostDashboardStack.Navigator screenOptions={{ headerShown: false }}>
      <HostDashboardStack.Screen name="HostDashboardOverview" component={HostDashboardOverviewScreen} />
      <HostDashboardStack.Screen name="HostDashboardAnalytics" component={HostDashboardAnalyticsScreen} />
      <HostDashboardStack.Screen name="HostDashboardEdit" component={HostDashboardEditScreen} />
    </HostDashboardStack.Navigator>
  );
}

export default function StackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="OnboardingFlow" component={OnboardingNavigator} />
      <RootStack.Screen name="AuthFlow" component={AuthNavigator} />
      <RootStack.Screen name="MainTabs" component={TabNavigator} />
      <RootStack.Screen name="CreatePopupFlow" component={CreatePopupNavigator} />
      <RootStack.Screen name="HostDashboardFlow" component={HostDashboardNavigator} />
      <RootStack.Screen name="PopupDetails" component={PopupDetailsScreen} />
      <RootStack.Screen name="Notifications" component={NotificationsScreen} />
      <RootStack.Screen name="NotificationDetails" component={NotificationDetailsScreen} />
      <RootStack.Screen name="PaymentScan" component={PaymentScanScreen} />
      <RootStack.Screen name="RatingFeedback" component={RatingScreen} />
      <RootStack.Screen name="HelpSupport" component={HelpScreen} />
      <RootStack.Screen name="FavoritesGallery" component={FavoritesAltScreen} />
    </RootStack.Navigator>
  );
}
