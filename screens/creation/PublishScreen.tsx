import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function PublishScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Review & publish" subtitle="Step 4 · Lightning ready" actionLabel="Preview" />
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Overview</Text>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Title</Text>
          <Text style={[styles.value, { color: colors.text }]}>Lightning Latte Pop-up</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Date</Text>
          <Text style={[styles.value, { color: colors.text }]}>Oct 18 – Oct 20</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Location</Text>
          <Text style={[styles.value, { color: colors.text }]}>Wynwood Art District</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Pricing</Text>
          <Text style={[styles.value, { color: Colors.primary }]}>₿ 0.00042 / guest</Text>
        </View>
        <Button label="Publish pop-up" />
      </Card>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Smart boosts</Text>
        <Text style={[styles.description, { color: colors.subtle }]}>Reach the Bitcoin community with curated promo drops.</Text>
        <Button label="Boost my event" variant="secondary" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.xs,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  value: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
  },
  description: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
});
