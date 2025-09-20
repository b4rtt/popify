import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

const tags = ['Food', 'Vibes', 'Staff', 'Bitcoin checkout', 'Value'];

export default function RatingScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Rate your experience" subtitle="Feedback" actionLabel="Skip" />
      <Card>
        <Text style={[styles.prompt, { color: colors.text }]}>How was Satoshi Street Tacos?</Text>
        <View style={styles.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Text key={index} style={styles.star}>
              {index < 4 ? '⭐' : '☆'}
            </Text>
          ))}
        </View>
        <Text style={[styles.label, { color: colors.subtle }]}>What stood out?</Text>
        <View style={styles.tagRow}>
          {tags.map((tag, index) => (
            <View
              key={tag}
              style={[styles.tag, { backgroundColor: index === 0 ? Colors.primary : colors.card }]}
            >
              <Text style={[styles.tagText, { color: index === 0 ? colors.background : colors.text }]}>{tag}</Text>
            </View>
          ))}
        </View>
        <Button label="Submit feedback" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  prompt: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
  },
  stars: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginVertical: Spacing.sm,
  },
  star: {
    fontSize: 32,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  tag: {
    borderRadius: 999,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  tagText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
});
