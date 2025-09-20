import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { TransactionItem } from '@/components/common/TransactionItem';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { transactions } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function WalletScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Lightning wallet" subtitle="Balance & history" actionLabel="Deposit" />
      <Card elevated>
        <Text style={[styles.balanceLabel, { color: colors.subtle }]}>Available balance</Text>
        <Text style={[styles.balanceValue, { color: colors.text }]}>₿ 0.152304</Text>
        <View style={styles.actions}>
          <Button label="Send" variant="secondary" />
          <Button label="Receive" />
        </View>
      </Card>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent activity</Text>
        <Text style={[styles.sectionLink, { color: Colors.primary }]}>View all</Text>
      </View>
      <View>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  balanceLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  balanceValue: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['4xl'],
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize['2xl'],
  },
  sectionLink: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
});
