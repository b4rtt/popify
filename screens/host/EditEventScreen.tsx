import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function EditEventScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Edit Lightning Latte" subtitle="Host controls" actionLabel="Preview" />
      <Card>
        <Input label="Title" value="Lightning Latte Pop-up" />
        <Input label="Capacity" value="90" keyboardType="numeric" />
        <Input label="Price (sats)" value="4200" keyboardType="numeric" />
        <View style={styles.row}>
          <Text style={[styles.toggleLabel, { color: colors.subtle }]}>Enable waitlist</Text>
          <Button label="On" variant="secondary" />
        </View>
        <Button label="Save changes" />
      </Card>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Lightning settings</Text>
        <Text style={[styles.sectionDescription, { color: colors.subtle }]}>Connected to Popify Lightning node · auto payouts daily.</Text>
        <Button label="View wallet" variant="ghost" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
    marginBottom: Spacing.sm,
  },
  sectionDescription: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
});
