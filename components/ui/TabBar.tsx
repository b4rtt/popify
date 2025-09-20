import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { BorderRadius, Shadow, Spacing } from '@/constants/Layout';
import { FontSize, FontWeight } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useAppTheme();
  const activeTint = Colors.primary;
  const inactiveTint = colors.subtle;

  const items = useMemo(() => state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    return { key: route.key, label, onPress, isFocused };
  }), [state.routes, state.index, descriptors, navigation]);

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
      {items.map(({ key, label, onPress, isFocused }) => (
        <Pressable
          key={key}
          onPress={onPress}
          style={[styles.item, isFocused && styles.itemActive]}
        >
          <Text
            style={[
              styles.label,
              { color: isFocused ? activeTint : inactiveTint },
            ]}
          >
            {label as string}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: BorderRadius['2xl'],
    borderWidth: 1,
    padding: Spacing.sm,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    ...Shadow.lg,
  },
  item: {
    flex: 1,
    borderRadius: BorderRadius.xl,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
  },
  itemActive: {
    backgroundColor: 'rgba(31, 209, 219, 0.1)',
  },
  label: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});
