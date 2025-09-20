import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function PaymentScanScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer scrollable={false}>
      <Header title="Scan to pay" subtitle="On-site payments" actionLabel="History" />
      <View style={[styles.scanner, { backgroundColor: colors.card, borderColor: colors.border }]}> 
        <View style={styles.crosshairHorizontal} />
        <View style={styles.crosshairVertical} />
        <Text style={[styles.scannerText, { color: colors.subtle }]}>Align QR within frame</Text>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.helper, { color: colors.subtle }]}>Accepts Lightning invoices & static QR codes.</Text>
        <Button label="Show my QR" variant="secondary" />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    borderRadius: BorderRadius['2xl'],
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  crosshairHorizontal: {
    position: 'absolute',
    width: '80%',
    height: 2,
    backgroundColor: Colors.primary,
  },
  crosshairVertical: {
    position: 'absolute',
    height: '80%',
    width: 2,
    backgroundColor: Colors.primary,
  },
  scannerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
    marginTop: Spacing.lg,
  },
  footer: {
    gap: Spacing.md,
  },
  helper: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
    textAlign: 'center',
  },
});
