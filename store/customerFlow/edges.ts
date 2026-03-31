import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "e1-2",
    source: "customer-register",
    target: "customer-login",
    animated: true,
    label: "after confirming email or phone",
  },
  { id: "e2-3", source: "customer-login", target: "customer-account" },
  { id: "e3-4", source: "customer-account", target: "add-to-cart" },
  { id: "e4-5", source: "add-to-cart", target: "order-checkout" },
  {
    id: "e5-6",
    source: "order-checkout",
    target: "order-payment",
    animated: true,
    label: "proceed to payment",
  },
  { id: "e5-7", source: "order-payment", target: "place-order" },
  { id: "e6-8", source: "customer-account", target: "customer-wishlist" },
  { id: "e7-9", source: "place-order", target: "cancel-order" },
  { id: "e8-10", source: "cancel-order", target: "order-payment-return" },
  { id: "e9-11", source: "customer-account", target: "manage-profile" },
  { id: "e10-12", source: "manage-profile", target: "manage-address" },
] as Edge[];
