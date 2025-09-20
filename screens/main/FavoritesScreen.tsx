import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Header } from '@/components/common/Header';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Button } from '@/components/ui/Button';
import Colors from '@/constants/Colors';
import { BorderRadius, Spacing } from '@/constants/Layout';
import { FontSize } from '@/constants/Typography';
import { favoriteEvents } from '@/data/mockData';
import { useAppTheme } from '@/theme/ThemeProvider';

const filters = ['All', 'Food', 'Music', 'Wellness', 'Art'];

export default function FavoritesScreen() {
  const { colors } = useAppTheme();

  return (
    <ScreenContainer>
      <Header title="Saved pop-ups" subtitle="Favorites" actionLabel="Share list" />
      <View style={styles.filterRow}>
        {filters.map((filter, index) => (
          <View
            key={filter}
            style={[
              styles.filterChip,
              {
                backgroundColor: index === 0 ? Colors.primary : colors.card,
                borderColor: index === 0 ? Colors.primary : colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: index === 0 ? colors.background : colors.text },
              ]}
            >
              {filter}
            </Text>
          </View>
        ))}
      </View>
      <FlatList
        data={favoriteEvents}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: Spacing.lg }} />}
        renderItem={({ item }) => (
          <View style={[styles.itemCard, { backgroundColor: colors.surface, borderColor: colors.border }]}> 
            <View style={styles.itemHeader}>
              <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
              <Text style={[styles.date, { color: colors.subtle }]}>{item.date}</Text>
            </View>
            <Text style={[styles.location, { color: colors.subtle }]}>{item.location}</Text>
            <View style={styles.metaRow}>
              <Text style={[styles.meta, { color: colors.text }]}>Rating {item.rating.toFixed(1)}</Text>
              <Text style={[styles.meta, { color: Colors.primary }]}>₿ {item.price.toFixed(3)}</Text>
            </View>
            <Button label="View details" variant="secondary" />
          </View>
        )}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
  filterText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.sm,
  },
  list: {
    paddingBottom: Spacing['3xl'],
  },
  itemCard: {
    borderRadius: BorderRadius['2xl'],
    borderWidth: 1,
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: FontSize.xl,
  },
  date: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.sm,
  },
  location: {
    fontFamily: 'Inter-Medium',
    fontSize: FontSize.base,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    fontFamily: 'Inter-SemiBold',
    fontSize: FontSize.base,
  },
});
