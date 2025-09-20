import { StyleSheet, Text } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { notifications } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

const notification = notifications[0];

export default function NotificationDetailsScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Notification" subtitle="Details" actionLabel="Archive" />
      <Card>
        <Text style={[styles.title, { color: colors.text }]}>{notification.title}</Text>
        <Text style={[styles.timestamp, { color: colors.subtle }]}>{notification.timestamp}</Text>
        <Text style={[styles.body, { color: colors.text }]}>{notification.body}</Text>
        <Button label="Go to event" variant="secondary" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
    marginBottom: Spacing.xs,
  },
  timestamp: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
    marginBottom: Spacing.md,
  },
  body: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
    marginBottom: Spacing.lg,
  },
});
