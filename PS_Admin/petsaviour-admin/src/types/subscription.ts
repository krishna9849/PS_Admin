export type SubscriptionPlan = {
  id: string;
  name: string;
  price: number;
  durationInMonths: number;
  description?: string;
  isActive: boolean;
  createdAt: string;
};
