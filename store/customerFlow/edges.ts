import { type Edge } from "@xyflow/react";

export const initialEdges = [
  { id: "e1-2", source: "customer-register", target: "customer-login" },
  { id: "e2-3", source: "customer-login", target: "customer-account" },
  { id: "e3-4", source: "customer-account", target: "customer-add-to-cart" },
  { id: "e4-5", source: "customer-add-to-cart", target: "customer-checkout" },
  { id: "e5-6", source: "customer-checkout", target: "customer-payment" },
  { id: "e5-7", source: "customer-payment", target: "customer-order" },
  { id: "e6-8", source: "customer-account", target: "customer-wishlist" },
] as Edge[];
