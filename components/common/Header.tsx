import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize, FontWeight } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

interface HeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  rightSlot?: ReactNode;
}

export function Header({ title, subtitle, actionLabel, onActionPress, rightSlot }: HeaderProps) {
  const { colors, toggleTheme, mode } = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        {subtitle ? <Text style={[styles.subtitle, { color: colors.subtle }]}>{subtitle}</Text> : null}
      </View>
      <View style={styles.actions}>
        {actionLabel ? (
          <Pressable
            onPress={onActionPress}
            style={[styles.action, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <Text style={[styles.actionLabel, { color: Colors.primary }]}>{actionLabel}</Text>
          </Pressable>
        ) : null}
        <Pressable
          onPress={toggleTheme}
          style={[styles.themeToggle, { backgroundColor: colors.card, borderColor: colors.border }]}
        >
          <Text style={[styles.themeToggleLabel, { color: colors.text }]}>{mode === 'dark' ? '☀️' : '🌙'}</Text>
        </Pressable>
        {rightSlot}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  textWrapper: {
    flex: 1,
    gap: Spacing.xs,
  },
  title: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['3xl'],
    fontWeight: FontWeight.black,
  },
  subtitle: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginLeft: Spacing.md,
  },
  action: {
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderWidth: 1,
  },
  actionLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
  themeToggle: {
    borderRadius: BorderRadius.full,
    padding: Spacing.sm,
    borderWidth: 1,
  },
  themeToggleLabel: {
    fontSize: FontSize.base,
  },
});
