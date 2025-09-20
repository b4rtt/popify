import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { useAppTheme } from '@/theme/ThemeProvider';

const marker = {
  latitude: 25.8007,
  longitude: -80.1998,
};

export default function LocationScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Pin your location" subtitle="Step 2 · Where is it happening?" actionLabel="Save draft" />
      <Card>
        <Input label="Address" placeholder="Wynwood Art District, Miami" />
        <Input label="Location notes" placeholder="Enter buzzer code, meetup spot, etc." multiline />
        <Text style={[styles.label, { color: colors.subtle }]}>Map preview</Text>
        <MapView style={styles.map} initialRegion={{ ...marker, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
          <Marker coordinate={marker} />
        </MapView>
        <Button label="Next: Time window" />
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  map: {
    width: '100%',
    height: 220,
    borderRadius: BorderRadius['2xl'],
    marginTop: Spacing.sm,
  },
});
