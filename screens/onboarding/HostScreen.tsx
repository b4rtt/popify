import { ScreenContainer } from '@/components/common/ScreenContainer';
import { OnboardingSlide } from './OnboardingSlide';

export default function HostScreen() {
  return (
    <ScreenContainer>
      <OnboardingSlide
        title="Host your own pop-up"
        subtitle="Host Mode"
        description="Launch your pop-up with smart scheduling, guest caps, and lightning-fast bitcoin payouts to your wallet."
        image="https://images.unsplash.com/photo-1555992336-cbf7e79fe5ac"
        actionLabel="Almost there"
      />
    </ScreenContainer>
  );
}
