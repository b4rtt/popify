import { StyleSheet, Switch, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function ProfileScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Nova Frequencies" subtitle="Host & tastemaker" actionLabel="Edit" />
      <Card>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>City</Text>
          <Text style={[styles.value, { color: colors.text }]}>Austin, TX</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Lightning address</Text>
          <Text style={[styles.value, { color: colors.text }]}>nova⚡popify.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Host mode</Text>
          <Switch value thumbColor={colors.card} />
        </View>
        <Button label="View public profile" variant="secondary" />
      </Card>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Preferences</Text>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Push notifications</Text>
          <Switch value thumbColor={colors.card} />
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, { color: colors.subtle }]}>Auto accept tips</Text>
          <Switch value thumbColor={colors.card} />
        </View>
        <Button label="Log out" variant="ghost" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
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
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
    marginBottom: Spacing.sm,
  },
});
