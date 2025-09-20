import { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { Spacing } from '@/constants/Layout';
import { useAppTheme } from '@/theme/ThemeProvider';

interface ScreenContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  padding?: number;
}

export function ScreenContainer({ children, scrollable = true, padding = Spacing.lg }: ScreenContainerProps) {
  const { colors } = useAppTheme();

  if (scrollable) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
        <ScrollView
          contentContainerStyle={[styles.content, { padding, backgroundColor: colors.background }]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <View style={[styles.content, { padding, backgroundColor: colors.background }]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    gap: Spacing.lg,
  },
});
