export type EventCategory =
  | 'food'
  | 'art'
  | 'music'
  | 'wellness'
  | 'tech'
  | 'fashion';

export interface PopifyEvent {
  id: string;
  title: string;
  host: string;
  description: string;
  date: string;
  timeRange: string;
  location: string;
  coordinates: { latitude: number; longitude: number };
  capacity: number;
  price: number;
  isBitcoinOnly: boolean;
  tags: string[];
  attendees: number;
  rating: number;
  category: EventCategory;
  image: string;
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'incoming' | 'outgoing';
  timestamp: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  eventId: string;
  reviewer: string;
  rating: number;
  feedback: string;
  timestamp: string;
}

export const events: PopifyEvent[] = [
  {
    id: '1',
    title: 'Satoshi Street Tacos',
    host: 'Luna M.',
    description:
      'Late-night taco pop-up featuring locally sourced ingredients and Bitcoin-exclusive specials.',
    date: 'Fri, Oct 18',
    timeRange: '8:00 PM – 11:30 PM',
    location: 'Wynwood Art District, Miami',
    coordinates: { latitude: 25.8007, longitude: -80.1998 },
    capacity: 120,
    price: 18,
    isBitcoinOnly: true,
    tags: ['food', 'night', 'bitcoin'],
    attendees: 84,
    rating: 4.8,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
  },
  {
    id: '2',
    title: 'Sound Bath Under the Stars',
    host: 'Nova Frequencies',
    description:
      'Immersive meditation evening with modular synth soundscapes and guided breathwork.',
    date: 'Sat, Oct 19',
    timeRange: '7:00 PM – 9:00 PM',
    location: 'Zilker Botanical Garden, Austin',
    coordinates: { latitude: 30.2669, longitude: -97.7727 },
    capacity: 60,
    price: 28,
    isBitcoinOnly: false,
    tags: ['wellness', 'music'],
    attendees: 44,
    rating: 4.9,
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
  },
  {
    id: '3',
    title: 'Crypto Canvas: Live NFT Mural',
    host: 'PixelPulse Collective',
    description:
      'Witness a live collaborative mural creation minted on-chain with attendee participation.',
    date: 'Sun, Oct 20',
    timeRange: '3:00 PM – 7:00 PM',
    location: 'Downtown Arts Corridor, Denver',
    coordinates: { latitude: 39.7392, longitude: -104.9903 },
    capacity: 200,
    price: 0,
    isBitcoinOnly: false,
    tags: ['art', 'interactive', 'nft'],
    attendees: 156,
    rating: 4.7,
    category: 'art',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb',
  },
  {
    id: '4',
    title: 'Lightning Latte Pop-up',
    host: 'BrewChain Co.',
    description:
      'Morning coffee lab where every drink is brewed to order and payable via Lightning Network.',
    date: 'Daily',
    timeRange: '7:00 AM – 11:00 AM',
    location: 'Financial District, San Francisco',
    coordinates: { latitude: 37.7946, longitude: -122.3999 },
    capacity: 90,
    price: 6,
    isBitcoinOnly: true,
    tags: ['coffee', 'bitcoin', 'community'],
    attendees: 72,
    rating: 4.6,
    category: 'food',
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e',
  },
];

export const favoriteEvents = events.filter((event) => event.rating >= 4.7);

export const transactions: Transaction[] = [
  { id: 'tx-1', title: 'Satoshi Street Tacos', amount: -0.00042, type: 'outgoing', timestamp: '2024-10-16T20:45:00Z' },
  { id: 'tx-2', title: 'Sound Bath Under the Stars', amount: -0.00072, type: 'outgoing', timestamp: '2024-10-15T18:10:00Z' },
  { id: 'tx-3', title: 'Lightning Latte Tips', amount: 0.0015, type: 'incoming', timestamp: '2024-10-14T09:12:00Z' },
  { id: 'tx-4', title: 'Popify Host Payout', amount: 0.015, type: 'incoming', timestamp: '2024-10-12T12:00:00Z' },
];

export const notifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Your event is trending! 🎉',
    body: 'Satoshi Street Tacos is in the top 5 lightning-friendly pop-ups this week.',
    timestamp: '2h ago',
    read: false,
  },
  {
    id: 'notif-2',
    title: 'New booking confirmed',
    body: 'Jamie L. reserved 2 spots for Sound Bath Under the Stars.',
    timestamp: '5h ago',
    read: false,
  },
  {
    id: 'notif-3',
    title: 'Reminder: Payout pending',
    body: 'Lightning payout for Lightning Latte Pop-up will be processed tomorrow.',
    timestamp: 'Yesterday',
    read: true,
  },
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I accept Bitcoin payments?',
    answer:
      'Create a Popify Lightning wallet or connect your existing wallet to start accepting instant Bitcoin payments.',
  },
  {
    id: 'faq-2',
    question: 'Can I host recurring pop-ups?',
    answer: 'Yes! Use the scheduling tools in the host dashboard to duplicate successful events.',
  },
  {
    id: 'faq-3',
    question: 'Is there on-site support available?',
    answer:
      'Popify ambassadors are available in select cities to help you set up hardware and onboard guests.',
  },
];

export const reviews: ReviewItem[] = [
  {
    id: 'rev-1',
    eventId: '1',
    reviewer: 'Kai T.',
    rating: 5,
    feedback: 'The tacos were incredible and the Lightning checkout was seamless!',
    timestamp: 'Oct 12, 2024',
  },
  {
    id: 'rev-2',
    eventId: '2',
    reviewer: 'Morgan P.',
    rating: 4,
    feedback: 'Loved the ambiance, would have enjoyed a longer session.',
    timestamp: 'Oct 10, 2024',
  },
  {
    id: 'rev-3',
    eventId: '3',
    reviewer: 'Elena R.',
    rating: 5,
    feedback: 'Interactive art meets crypto magic—count me in for the next drop!',
    timestamp: 'Oct 9, 2024',
  },
];

export const roadmap = [
  'Push notifications with actionable event updates',
  'Host analytics with real-time ticket sales',
  'In-app messaging between hosts and attendees',
  'Offline caching for maps and wallet balance',
];
