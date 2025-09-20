import { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { BorderRadius, Shadow, Spacing } from '@/constants/Layout';
import { useAppTheme } from '@/theme/ThemeProvider';

interface CardProps extends ViewProps {
  children: ReactNode;
  elevated?: boolean;
}

export function Card({ children, elevated = false, style, ...props }: CardProps) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.base,
        { backgroundColor: colors.surface, borderColor: colors.border },
        elevated && Shadow.md,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
});
