import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

const categories = ['Food & Drink', 'Music', 'Art', 'Wellness', 'Tech'];

export default function BasicInfoScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Create a pop-up" subtitle="Step 1 · Basic info" actionLabel="Save draft" />
      <Card>
        <Input label="Event name" placeholder="Lightning Latte Pop-up" />
        <Input label="Short description" placeholder="Tell guests what to expect" multiline />
        <Text style={[styles.label, { color: colors.subtle }]}>Category</Text>
        <View style={styles.chipRow}>
          {categories.map((category, index) => (
            <View
              key={category}
              style={[
                styles.chip,
                {
                  backgroundColor: index === 0 ? Colors.primary : colors.card,
                  borderColor: index === 0 ? Colors.primary : colors.border,
                },
              ]}
            >
              <Text style={[styles.chipText, { color: index === 0 ? colors.background : colors.text }]}>
                {category}
              </Text>
            </View>
          ))}
        </View>
        <Button label="Next: Location" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderWidth: 1,
  },
  chipText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
});
