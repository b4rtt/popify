import { ScreenContainer } from '@/components/common/ScreenContainer';
import { OnboardingSlide } from './OnboardingSlide';

export default function GetStartedScreen() {
  return (
    <ScreenContainer>
      <OnboardingSlide
        title="What is Popify?"
        subtitle="Get Started"
        description="A home for limited-run experiences powered by the Lightning Network. Join as a guest or become a host in minutes."
        image="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
        actionLabel="Next"
      />
    </ScreenContainer>
  );
}
