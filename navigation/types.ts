export type OnboardingStackParamList = {
  OnboardingWelcome: undefined;
  OnboardingGetStarted: undefined;
  OnboardingDiscover: undefined;
  OnboardingHost: undefined;
  OnboardingPayments: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  CreateBitcoinAccount1: undefined;
  CreateBitcoinAccount2: undefined;
};

export type CreatePopupStackParamList = {
  CreatePopupBasicInfo: undefined;
  CreatePopupLocation: undefined;
  CreatePopupTimeWindow: undefined;
  CreatePopupPublish: undefined;
};

export type HostDashboardStackParamList = {
  HostDashboardOverview: undefined;
  HostDashboardAnalytics: undefined;
  HostDashboardEdit: undefined;
};

export type RootStackParamList = {
  OnboardingFlow: undefined;
  AuthFlow: undefined;
  MainTabs: undefined;
  CreatePopupFlow: undefined;
  PopupDetails: { eventId: string } | undefined;
  HostDashboardFlow: undefined;
  Notifications: undefined;
  NotificationDetails: { notificationId: string } | undefined;
  PaymentScan: undefined;
  RatingFeedback: undefined;
  HelpSupport: undefined;
  FavoritesGallery: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Wallet: undefined;
  Profile: undefined;
};
