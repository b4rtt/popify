import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function LoginScreen() {
  const { colors } = useAppTheme();
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <ScreenContainer>
      <Header title="Welcome back" subtitle="Sign in with your nickname & passcode" />
      <Card>
        <View style={styles.stack}>
          <Input label="Nickname" placeholder="satoshi.superfan" autoCapitalize="none" />
          <Input label="Passcode" placeholder="••••••" secureTextEntry />
          <View style={styles.row}>
            <View style={styles.rememberMe}>
              <Switch value={rememberMe} onValueChange={setRememberMe} thumbColor={colors.card} />
              <Text style={[styles.rememberText, { color: colors.subtle }]}>Remember me</Text>
            </View>
            <Text style={[styles.forgot, { color: colors.text }]}>Forgot passcode?</Text>
          </View>
          <Button label="Sign in" />
        </View>
      </Card>
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.subtle }]}>New here?</Text>
        <Text style={[styles.footerAction, { color: colors.text }]}>Create a Bitcoin account →</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: Spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  rememberText: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  forgot: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.xs,
  },
  footerText: {
    fontFamily: 'Inter-Regular',
    fontSize: FontSize.sm,
  },
  footerAction: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
});
