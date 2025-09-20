import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { EventCard } from '@/components/common/EventCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { events } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

const initialRegion = {
  latitude: 37.7749,
  longitude: -122.4194,
  latitudeDelta: 0.6,
  longitudeDelta: 0.6,
};

export default function HomeScreen() {
  const { colors, mode } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="What’s popping tonight?" subtitle="Map + curated list" actionLabel="Filter" />
      <Card elevated>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialRegion}
          customMapStyle={mode === 'dark' ? darkMapStyle : []}
        >
          {events.map((event) => (
            <Marker
              key={event.id}
              coordinate={event.coordinates}
              title={event.title}
              description={event.location}
            />
          ))}
        </MapView>
        <View style={styles.mapFooter}>
          <Text style={[styles.mapLabel, { color: colors.text }]}>Live in Miami · Bitcoin-friendly</Text>
          <Button label="Open full map" variant="secondary" />
        </View>
      </Card>
      <View style={styles.listHeader}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Tonight’s highlights</Text>
        <Text style={[styles.sectionAction, { color: Colors.primary }]}>See all</Text>
      </View>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 240,
    borderRadius: BorderRadius['2xl'],
  },
  mapFooter: {
    marginTop: Spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mapLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: 'Inter-Black',
    fontSize: FontSize['2xl'],
  },
  sectionAction: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
});

const darkMapStyle = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#1d2c4d' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8ec3b9' }],
  },
];
