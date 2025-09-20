import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { events, reviews } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

const event = events[0];
const eventReviews = reviews.filter((review) => review.eventId === event.id);

export default function PopupDetailsScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title={event.title} subtitle="Pop-up details" actionLabel="Share" />
      <ImageBackground source={{ uri: event.image }} style={styles.hero} imageStyle={styles.heroImage}>
        <View style={[styles.heroOverlay, { backgroundColor: 'rgba(17,32,33,0.55)' }]}> 
          <Text style={styles.heroTitle}>{event.title}</Text>
          <Text style={styles.heroMeta}>{event.location}</Text>
          <Button label="Reserve via Lightning" />
        </View>
      </ImageBackground>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>About</Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>{event.description}</Text>
        <View style={styles.metaRow}>
          <Text style={[styles.metaChip, { color: colors.text }]}>Capacity {event.capacity}</Text>
          <Text style={[styles.metaChip, { color: colors.text }]}>Attendees {event.attendees}</Text>
          <Text style={[styles.metaChip, { color: colors.text }]}>Rating {event.rating}</Text>
        </View>
      </Card>
      <Card>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Reviews</Text>
        {eventReviews.map((review) => (
          <View key={review.id} style={styles.reviewItem}>
            <Text style={[styles.reviewName, { color: colors.text }]}>{review.reviewer}</Text>
            <Text style={[styles.reviewMeta, { color: colors.subtle }]}>{review.timestamp}</Text>
            <Text style={[styles.reviewText, { color: colors.text }]}>{review.feedback}</Text>
          </View>
        ))}
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 220,
    borderRadius: BorderRadius['2xl'],
    overflow: 'hidden',
  },
  heroImage: {
    borderRadius: BorderRadius['2xl'],
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: Spacing['2xl'],
  },
  heroTitle: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['3xl'],
    color: '#ffffff',
  },
  heroMeta: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
    color: '#e2e8f0',
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
  },
  bodyText: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  metaRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  metaChip: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
  reviewItem: {
    marginTop: Spacing.md,
    gap: Spacing.xs,
  },
  reviewName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
    color: Colors.primary,
  },
  reviewMeta: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  reviewText: {
    fontFamily: 'Inter-Regular',
    fontSize: FontSize.base,
  },
});
