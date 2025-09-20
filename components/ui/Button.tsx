import { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize, FontWeight } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ label, onPress, variant = 'primary', icon, disabled, loading }: ButtonProps) {
  const { colors } = useAppTheme();
  const backgroundColor = {
    primary: Colors.primary,
    secondary: colors.surface,
    ghost: 'transparent',
  }[variant];

  const textColor = {
    primary: colors.background,
    secondary: colors.text,
    ghost: Colors.primary,
  }[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor, borderColor: variant === 'secondary' ? colors.border : 'transparent' },
        (disabled || loading) && { opacity: 0.6 },
        pressed && { transform: [{ scale: 0.98 }] },
      ]}
    >
      <View style={styles.content}>
        {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}
        {loading ? (
          <ActivityIndicator color={textColor} style={styles.spinner} />
        ) : (
          <Text style={[styles.label, { color: textColor }]}>{label}</Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    letterSpacing: 0.3,
  },
  iconWrapper: {
    marginRight: Spacing.xs,
  },
  spinner: {
    marginLeft: Spacing.xs,
  },
});
