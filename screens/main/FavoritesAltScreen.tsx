import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { favoriteEvents } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

export default function FavoritesAltScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Text style={[styles.heading, { color: colors.text }]}>Your curated lineup</Text>
      <View style={styles.grid}>
        {favoriteEvents.map((event) => (
          <ImageBackground key={event.id} source={{ uri: event.image }} style={styles.tile} imageStyle={styles.image}>
            <View style={[styles.overlay, { backgroundColor: 'rgba(17,32,33,0.55)' }]}> 
              <View style={styles.tileContent}>
                <Text style={styles.tileTitle}>{event.title}</Text>
                <Text style={styles.tileMeta}>{event.location}</Text>
                <View style={styles.tileFooter}>
                  <Text style={styles.tilePrice}>₿ {event.price.toFixed(3)}</Text>
                  <Button label="Details" variant="ghost" />
                </View>
              </View>
            </View>
          </ImageBackground>
        ))}
      </View>
      <Button label="Export itinerary" variant="secondary" />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['3xl'],
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  tile: {
    width: '48%',
    aspectRatio: 0.9,
    borderRadius: BorderRadius['2xl'],
    overflow: 'hidden',
  },
  image: {
    borderRadius: BorderRadius['2xl'],
  },
  overlay: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: 'space-between',
  },
  tileContent: {
    gap: Spacing.xs,
  },
  tileTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.lg,
    color: Colors.primary,
  },
  tileMeta: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
    color: '#f1f5f9',
  },
  tileFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tilePrice: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize.base,
    color: '#ffffff',
  },
});
