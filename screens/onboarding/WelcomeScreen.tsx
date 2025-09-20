import { ScreenContainer } from '@/components/common/ScreenContainer';
import { OnboardingSlide } from './OnboardingSlide';

export default function WelcomeScreen() {
  return (
    <ScreenContainer>
      <OnboardingSlide
        title="Discover pop-ups near you"
        subtitle="Welcome to Popify"
        description="Find curated pop-up experiences, tastings, and creative gatherings that accept instant Bitcoin payments."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
        actionLabel="Get Started"
      />
    </ScreenContainer>
  );
}
