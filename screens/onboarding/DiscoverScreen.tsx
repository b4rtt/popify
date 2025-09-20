import { ScreenContainer } from '@/components/common/ScreenContainer';
import { OnboardingSlide } from './OnboardingSlide';

export default function DiscoverScreen() {
  return (
    <ScreenContainer>
      <OnboardingSlide
        title="See what’s popping nearby"
        subtitle="Discover"
        description="Browse live maps and curated lists to uncover one-night-only menus, collabs, and bitcoin-only events."
        image="https://images.unsplash.com/photo-1531058020387-3be344556be6"
        actionLabel="Keep exploring"
      />
    </ScreenContainer>
  );
}
