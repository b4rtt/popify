import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { faqs, roadmap } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function HelpScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Help & support" subtitle="Frequently asked questions" actionLabel="Contact" />
      <View style={styles.list}>
        {faqs.map((faq) => (
          <Card key={faq.id}>
            <Text style={[styles.question, { color: colors.text }]}>{faq.question}</Text>
            <Text style={[styles.answer, { color: colors.subtle }]}>{faq.answer}</Text>
          </Card>
        ))}
      </View>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Roadmap</Text>
        {roadmap.map((item, index) => (
          <Text key={item} style={[styles.roadmapItem, { color: colors.subtle }]}>
            {index + 1}. {item}
          </Text>
        ))}
        <Button label="Request a feature" variant="secondary" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: Spacing.md,
  },
  question: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
  },
  answer: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
    marginBottom: Spacing.sm,
  },
  roadmapItem: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
    marginBottom: Spacing.xs,
  },
});
