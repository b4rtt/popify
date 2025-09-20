import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { notifications } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function NotificationsScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Notification center" subtitle="Latest alerts" actionLabel="Mark all read" />
      <View style={styles.list}>
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <Text style={[styles.title, { color: colors.text }]}>{notification.title}</Text>
            <Text style={[styles.body, { color: colors.subtle }]}>{notification.body}</Text>
            <Text style={[styles.timestamp, { color: colors.subtle }]}>{notification.timestamp}</Text>
          </Card>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: Spacing.md,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.lg,
  },
  body: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  timestamp: {
    fontFamily: 'Inter-Regular',
    fontSize: FontSize.sm,
  },
});
