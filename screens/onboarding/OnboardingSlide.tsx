import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize, FontWeight } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

interface OnboardingSlideProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

export function OnboardingSlide({ title, subtitle, description, image, actionLabel, onActionPress }: OnboardingSlideProps) {
  const { colors } = useAppTheme();

  return (
    <ImageBackground source={{ uri: image }} style={styles.background} imageStyle={styles.image}>
      <View style={[styles.overlay, { backgroundColor: 'rgba(17, 32, 33, 0.6)' }]}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.description, { color: colors.background }]}>{description}</Text>
          {actionLabel ? (
            <Button label={actionLabel} variant="primary" onPress={onActionPress} />
          ) : null}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: BorderRadius['2xl'],
    overflow: 'hidden',
  },
  image: {
    borderRadius: BorderRadius['2xl'],
  },
  overlay: {
    padding: Spacing['2xl'],
  },
  content: {
    gap: Spacing.md,
  },
  subtitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
    letterSpacing: 0.6,
    color: Colors.primary,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['4xl'],
    fontWeight: FontWeight.black,
    color: '#ffffff',
  },
  description: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.lg,
    color: '#e2e8f0',
  },
});
