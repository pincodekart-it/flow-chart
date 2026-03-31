import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "edge-1",
    source: "customer-register",
    target: "customer-login",
    animated: true,
    label: "after confirming email or phone",
  },
  { id: "edge-2", source: "customer-login", target: "customer-account" },
  { id: "edge-3", source: "customer-account", target: "add-to-cart" },
  { id: "edge-4", source: "add-to-cart", target: "order-checkout" },
  {
    id: "edge-5",
    source: "order-checkout",
    target: "order-payment",
    animated: true,
    label: "proceed to payment",
  },
  { id: "edge-6", source: "order-payment", target: "place-order" },
  { id: "edge-7", source: "customer-account", target: "customer-wishlist" },
  { id: "edge-8", source: "place-order", target: "cancel-order" },
  { id: "edge-9", source: "cancel-order", target: "order-payment-return" },
  { id: "edge-10", source: "customer-account", target: "manage-profile" },
  { id: "edge-11", source: "manage-profile", target: "manage-address" },
] as Edge[];
