import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

const recoveryWords = [
  'galaxy',
  'ember',
  'citrus',
  'vault',
  'saffron',
  'quantum',
  'harbor',
  'nebula',
  'ledger',
  'aurora',
  'cipher',
  'zenith',
];

export default function CreateAccountScreen2() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Secure your wallet" subtitle="Step 2 · Recovery phrase" />
      <Card>
        <Text style={[styles.description, { color: colors.subtle }]}>Write down these 12 words in order.</Text>
        <View style={styles.wordGrid}>
          {recoveryWords.map((word, index) => (
            <View key={word} style={[styles.wordCard, { backgroundColor: colors.card, borderColor: colors.border }]}> 
              <Text style={[styles.wordIndex, { color: colors.subtle }]}>{index + 1}.</Text>
              <Text style={[styles.word, { color: colors.text }]}>{word}</Text>
            </View>
          ))}
        </View>
        <Button label="I’ve saved them" />
      </Card>
      <Text style={[styles.helper, { color: colors.subtle }]}>Never share your recovery phrase with anyone.</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  description: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  wordGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  wordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: 999,
    borderWidth: 1,
    gap: Spacing.xs,
  },
  wordIndex: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
  word: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  helper: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
    textAlign: 'center',
  },
});
