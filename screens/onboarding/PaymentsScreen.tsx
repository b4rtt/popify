import { ScreenContainer } from '@/components/common/ScreenContainer';
import { OnboardingSlide } from './OnboardingSlide';

export default function PaymentsScreen() {
  return (
    <ScreenContainer>
      <OnboardingSlide
        title="Anonymous & easy payments"
        subtitle="Lightning Fast"
        description="Pay or get paid instantly with Bitcoin Lightning. No cards, no lengthy forms—just scan, confirm, and enjoy."
        image="https://images.unsplash.com/photo-1614064641938-3bbee529b244"
        actionLabel="Enter App"
      />
    </ScreenContainer>
  );
}
