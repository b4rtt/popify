import { ReactNode } from 'react';
import { StatusBar } from 'react-native';

import Colors from '@/constants/Colors';
import StackNavigator from './StackNavigator';
import { ThemeProvider, ThemedNavigationContainer } from '@/theme/ThemeProvider';

interface AppNavigatorProps {
  children?: ReactNode;
}

export default function AppNavigator({ children }: AppNavigatorProps) {
  return (
    <ThemeProvider>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <ThemedNavigationContainer>
        <StackNavigator />
        {children}
      </ThemedNavigationContainer>
    </ThemeProvider>
  );
}
