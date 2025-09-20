import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function CreateAccountScreen1() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Create your Bitcoin account" subtitle="Step 1 · Basic details" />
      <Card>
        <View style={styles.stepper}>
          <View style={[styles.step, { backgroundColor: colors.text }]} />
          <View style={[styles.step, { backgroundColor: colors.border }]} />
          <View style={[styles.step, { backgroundColor: colors.border }]} />
        </View>
        <Input label="Nickname" placeholder="lightning.chef" autoCapitalize="none" />
        <Input label="Email" keyboardType="email-address" placeholder="chef@popify.co" />
        <Input label="Create passcode" placeholder="••••••" secureTextEntry />
        <Button label="Continue" />
      </Card>
      <Text style={[styles.helper, { color: colors.subtle }]}>
        Your Popify Bitcoin wallet will be generated on the next step.
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  stepper: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  step: {
    flex: 1,
    height: 6,
    borderRadius: 999,
  },
  helper: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
    textAlign: 'center',
  },
});
