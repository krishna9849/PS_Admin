import { create } from "zustand";

type SubscriptionStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "EXPIRED"
  | "NONE";

type VendorState = {
  /* -------- Core -------- */
  vendorId: string | null;

  /* -------- Subscription -------- */
  subscriptionStatus: SubscriptionStatus;

  /* -------- Services -------- */
  servicesCount: number;

  /* -------- State -------- */
  hydrated: boolean;
  loading: boolean;

  /* -------- Derived -------- */
  isSubscribed: boolean;
  isReadyForOperations: boolean;

  /* -------- Actions -------- */
  setVendorProfile: (payload: {
    vendorId: string;
    subscriptionStatus: SubscriptionStatus;
    servicesCount: number;
  }) => void;

  resetVendor: () => void;
};

export const useVendorStore = create<VendorState>((set) => ({
  /* -------- Initial State -------- */
  vendorId: null,
  subscriptionStatus: "NONE",
  servicesCount: 0,

  hydrated: false,
  loading: false,

  isSubscribed: false,
  isReadyForOperations: false,

  /* -------- Actions -------- */

  setVendorProfile: ({
    vendorId,
    subscriptionStatus,
    servicesCount,
  }) =>
    set({
      vendorId,
      subscriptionStatus,
      servicesCount,

      isSubscribed: subscriptionStatus === "ACTIVE",

      isReadyForOperations:
        subscriptionStatus === "ACTIVE" && servicesCount > 0,

      hydrated: true,
      loading: false,
    }),

  resetVendor: () =>
    set({
      vendorId: null,
      subscriptionStatus: "NONE",
      servicesCount: 0,

      hydrated: false,
      loading: false,

      isSubscribed: false,
      isReadyForOperations: false,
    }),
}));
