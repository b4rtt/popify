import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { events } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function DashboardScreen() {
  const { colors } = useAppTheme();
  const hostedEvents = events.slice(0, 3);

  return (
    <ScreenContainer>
      <Header title="Host dashboard" subtitle="Live pop-ups" actionLabel="New pop-up" />
      <Card>
        <Text style={[styles.metricLabel, { color: colors.subtle }]}>Active bookings</Text>
        <Text style={[styles.metricValue, { color: colors.text }]}>128</Text>
        <Text style={[styles.metricDelta, { color: Colors.primary }]}>▲ 12% vs last week</Text>
      </Card>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>My pop-ups</Text>
        <View style={styles.list}>
          {hostedEvents.map((event) => (
            <View key={event.id} style={styles.itemRow}>
              <View>
                <Text style={[styles.itemTitle, { color: colors.text }]}>{event.title}</Text>
                <Text style={[styles.itemMeta, { color: colors.subtle }]}>{event.date}</Text>
              </View>
              <Button label="Manage" variant="secondary" />
            </View>
          ))}
        </View>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  metricLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  metricValue: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['4xl'],
  },
  metricDelta: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
    marginBottom: Spacing.md,
  },
  list: {
    gap: Spacing.md,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
  },
  itemMeta: {
    fontFamily: 'Inter-Regular',
    fontSize: FontSize.sm,
  },
});
