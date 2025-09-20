import { Image, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize, FontWeight } from '@/constants/Typography';
import { PopifyEvent } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

export function EventCard({ event }: { event: PopifyEvent }) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
    >
      <Image source={{ uri: event.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={[styles.title, { color: colors.text }]}>{event.title}</Text>
          <View style={[styles.tag, { backgroundColor: colors.tag }]}>
            <Text style={[styles.tagText, { color: Colors.primary }]}>{event.category}</Text>
          </View>
        </View>
        <Text style={[styles.host, { color: colors.subtle }]}>Hosted by {event.host}</Text>
        <Text style={[styles.description, { color: colors.text }]} numberOfLines={2}>
          {event.description}
        </Text>
        <View style={styles.metaRow}>
          <Text style={[styles.meta, { color: colors.subtle }]}>{event.date}</Text>
          <View style={styles.dot} />
          <Text style={[styles.meta, { color: colors.subtle }]}>{event.timeRange}</Text>
        </View>
        <Text style={[styles.location, { color: colors.text }]}>{event.location}</Text>
        <View style={styles.footer}>
          <Text style={[styles.price, { color: Colors.primary }]}>₿ {event.price.toFixed(3)}</Text>
          <Text style={[styles.rating, { color: colors.subtle }]}>⭐ {event.rating.toFixed(1)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius['2xl'],
    overflow: 'hidden',
    borderWidth: 1,
    marginBottom: Spacing.lg,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: Spacing.lg,
    gap: Spacing.xs,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
  },
  tag: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.lg,
  },
  tagText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.xs,
    textTransform: 'uppercase',
  },
  host: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: FontSize.base,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  meta: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  location: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  price: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize.lg,
  },
  rating: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
});
