import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

const slots = [
  { day: 'Friday', date: 'Oct 18', start: '18:00', end: '23:00' },
  { day: 'Saturday', date: 'Oct 19', start: '18:00', end: '23:00' },
  { day: 'Sunday', date: 'Oct 20', start: '16:00', end: '21:00' },
];

export default function TimeWindowScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="When should guests arrive?" subtitle="Step 3 · Time window" actionLabel="Save draft" />
      <Card>
        <Text style={[styles.label, { color: colors.subtle }]}>Select availability</Text>
        <View style={styles.slotList}>
          {slots.map((slot, index) => (
            <View
              key={slot.day}
              style={[
                styles.slot,
                {
                  backgroundColor: index === 0 ? Colors.primary : colors.card,
                  borderColor: index === 0 ? Colors.primary : colors.border,
                },
              ]}
            >
              <View>
                <Text style={[styles.slotDay, { color: index === 0 ? colors.background : colors.text }]}>
                  {slot.day}
                </Text>
                <Text style={[styles.slotDate, { color: index === 0 ? colors.background : colors.subtle }]}>
                  {slot.date}
                </Text>
              </View>
              <Text style={[styles.slotTime, { color: index === 0 ? colors.background : colors.text }]}>
                {slot.start} – {slot.end}
              </Text>
            </View>
          ))}
        </View>
        <Button label="Next: Publish" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  slotList: {
    gap: Spacing.sm,
  },
  slot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius['2xl'],
    borderWidth: 1,
  },
  slotDay: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
  },
  slotDate: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  slotTime: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize.lg,
  },
});
