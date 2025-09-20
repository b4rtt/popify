import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

const metrics = [
  { label: 'Revenue (7d)', value: '₿ 0.024', delta: '+18%' },
  { label: 'Average rating', value: '4.8', delta: '+0.2' },
  { label: 'Guests served', value: '312', delta: '+42' },
];

const heatmap = [72, 54, 88, 42, 63, 91, 30];

export default function AnalyticsScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Insights" subtitle="Analytics" actionLabel="Export" />
      <View style={styles.metricGrid}>
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <Text style={[styles.metricLabel, { color: colors.subtle }]}>{metric.label}</Text>
            <Text style={[styles.metricValue, { color: colors.text }]}>{metric.value}</Text>
            <Text style={[styles.metricDelta, { color: Colors.primary }]}>{metric.delta}</Text>
          </Card>
        ))}
      </View>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Weekly attendance</Text>
        <View style={styles.heatmapRow}>
          {heatmap.map((value, index) => (
            <View
              key={index}
              style={[styles.heatmapCell, { backgroundColor: `rgba(31,209,219,${0.3 + value / 150})` }]}
            >
              <Text style={styles.heatmapLabel}>{value}</Text>
            </View>
          ))}
        </View>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  metricLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  metricValue: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['3xl'],
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
  heatmapRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  heatmapCell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heatmapLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
    color: '#0f172a',
  },
});
