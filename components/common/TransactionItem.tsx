import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize, FontWeight } from '@/constants/Typography';
import { Transaction } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

function formatAmount(amount: number) {
  const sign = amount >= 0 ? '+' : '-';
  const absolute = Math.abs(amount);
  return `${sign}₿ ${absolute.toFixed(5)}`;
}

export function TransactionItem({ transaction }: { transaction: Transaction }) {
  const { colors } = useAppTheme();
  const isIncoming = transaction.type === 'incoming';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderColor: colors.border },
        isIncoming && { borderColor: Colors.primary },
      ]}
    >
      <View style={styles.textWrapper}>
        <Text style={[styles.title, { color: colors.text }]}>{transaction.title}</Text>
        <Text style={[styles.timestamp, { color: colors.subtle }]}>{transaction.timestamp}</Text>
      </View>
      <Text style={[styles.amount, { color: isIncoming ? Colors.primary : '#ef4444' }]}>
        {formatAmount(transaction.amount)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    marginBottom: Spacing.sm,
  },
  textWrapper: {
    gap: Spacing.xs,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
    fontWeight: FontWeight.semibold,
  },
  timestamp: {
    fontFamily: 'Inter-Regular',
    fontSize: FontSize.sm,
  },
  amount: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.base,
    fontWeight: FontWeight.bold,
  },
});
