# Popify - React Native Implementation TODO

## Overview
This document outlines the implementation plan for converting the HTML/CSS design screens into React Native components for the Popify app - a platform for discovering and hosting pop-up events with Bitcoin payments.

## Design System Analysis

### Color Palette
- **Primary**: `#1fd1db` (Turquoise)
- **Background Light**: `#f6f8f8`
- **Background Dark**: `#112021`
- **Text Light**: `#112021` / `#111827`
- **Text Dark**: `#f6f8f8` / `#f9fafb`
- **Subtle Light**: `#6b7280` / `#648587`
- **Subtle Dark**: `#9ca3af` / `#9ab0b2`

### Typography
- **Font Family**: Inter
- **Weights**: 400, 500, 600, 700, 900

### Key UI Patterns
- Rounded corners (0.5rem to 1.5rem)
- Gradient overlays on images
- Backdrop blur effects
- Material Icons
- Card-based layouts
- Bottom tab navigation
- Floating action buttons

## Screen Implementation Plan

### 1. Onboarding Flow (5 screens)
- [x] **onboarding_-_welcome**: Main landing screen with hero image and "Get Started" button
- [ ] **onboarding_-_get_started**: Introduction to the app concept
- [ ] **onboarding_-_discover_pop-ups**: Explains discovery features
- [ ] **onboarding_-_host_your_own**: Explains hosting capabilities
- [ ] **onboarding_-_anonymous_&_easy_payments**: Bitcoin payment explanation

### 2. Authentication (3 screens)
- [ ] **login_screen**: Nickname and passcode login form
- [ ] **create_bitcoin_account_1**: Bitcoin wallet setup step 1
- [ ] **create_bitcoin_account_2**: Bitcoin wallet setup step 2

### 3. Main App Screens

#### Core Navigation
- [ ] **home_-_map_+_list**: Main discovery screen with map view and event list
- [ ] **favorites_1**: Saved events list view
- [ ] **favorites_2**: Alternative favorites layout
- [ ] **wallet**: Bitcoin wallet with balance and transaction history
- [ ] **user_profile**: User settings and profile management

#### Pop-up Creation Flow (4 screens)
- [ ] **create_popup_-_basic_info**: Title, description, and category selection
- [ ] **create_popup_-_location**: Location picker and address input
- [ ] **create_popup_-_time_window**: Date and time selection
- [ ] **create_popup_-_publish**: Final review and publish

#### Event Management
- [ ] **popup_details**: Detailed view of a specific pop-up event
- [ ] **host_dashboard/my_pop-ups_1**: Host's event management overview
- [ ] **host_dashboard/my_pop-ups_2**: Detailed event analytics
- [ ] **host_dashboard/my_pop-ups_3**: Event editing interface

#### Additional Features
- [ ] **notification_center_1**: Notification list
- [ ] **notification_center_2**: Notification details
- [ ] **on-site_payment_-_scan_qr**: QR code scanner for payments
- [ ] **rating/feedback_screen**: Event rating and review system
- [ ] **help/faq/support**: Help documentation and support

## Technical Implementation

### Dependencies to Add
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
npm install react-native-vector-icons
npm install react-native-maps (for map functionality)
npm install react-native-qrcode-scanner (for QR scanning)
npm install @react-native-async-storage/async-storage (for local storage)
```

### Folder Structure
```
screens/
├── onboarding/
│   ├── WelcomeScreen.tsx
│   ├── GetStartedScreen.tsx
│   ├── DiscoverScreen.tsx
│   ├── HostScreen.tsx
│   └── PaymentsScreen.tsx
├── auth/
│   ├── LoginScreen.tsx
│   ├── CreateAccountScreen1.tsx
│   └── CreateAccountScreen2.tsx
├── main/
│   ├── HomeScreen.tsx
│   ├── FavoritesScreen.tsx
│   ├── WalletScreen.tsx
│   └── ProfileScreen.tsx
├── creation/
│   ├── BasicInfoScreen.tsx
│   ├── LocationScreen.tsx
│   ├── TimeWindowScreen.tsx
│   └── PublishScreen.tsx
├── host/
│   ├── DashboardScreen.tsx
│   ├── AnalyticsScreen.tsx
│   └── EditEventScreen.tsx
└── misc/
    ├── PopupDetailsScreen.tsx
    ├── NotificationsScreen.tsx
    ├── PaymentScanScreen.tsx
    ├── RatingScreen.tsx
    └── HelpScreen.tsx

components/
├── ui/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── TabBar.tsx
└── common/
    ├── Header.tsx
    ├── EventCard.tsx
    └── TransactionItem.tsx

constants/
├── Colors.ts (update existing)
├── Typography.ts
└── Layout.ts

navigation/
├── AppNavigator.tsx
├── TabNavigator.tsx
└── StackNavigator.tsx
```

### Implementation Priority
1. **Theme & Constants** - Setup color scheme and typography
2. **Navigation Structure** - Basic app navigation
3. **Onboarding Flow** - User first experience
4. **Authentication** - Login and account creation
5. **Main Home Screen** - Core discovery functionality
6. **Wallet Integration** - Bitcoin payment features
7. **Pop-up Creation** - Event hosting workflow
8. **Additional Features** - Notifications, ratings, etc.

### Key Features to Implement
- [ ] Dark/Light theme support
- [ ] Bitcoin wallet integration
- [ ] Map integration for location discovery
- [ ] QR code scanning for payments
- [ ] Push notifications
- [ ] Image upload for events
- [ ] Real-time event updates
- [ ] Offline support with local storage

## Notes
- All screens should be responsive and work on various screen sizes
- Implement proper TypeScript types for all components
- Follow React Native best practices for performance
- Ensure accessibility compliance
- Test on both iOS and Android platforms
- Use functional components with hooks throughout
- Implement proper error handling and loading states

## Status
- **Created**: 2024-09-20
- **Total Screens**: 24 screens
- **Completed**: 0/24
- **In Progress**: TODO.md creation
- **Next**: Theme constants and navigation setup
