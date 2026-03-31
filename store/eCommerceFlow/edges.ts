import { type Edge } from "@xyflow/react";
import { initialEdges as orderPaymentEdges } from "../orderPaymentFlow/edges";

export const initialEdges = [
  ...orderPaymentEdges,
  {
    id: "e-commerce-edge-1",
    source: "customer-register",
    target: "customer-login",
    animated: true,
    label: "after confirming email or phone",
  },
  {
    id: "e-commerce-edge-2",
    source: "customer-login",
    target: "customer-account",
  },
  {
    id: "e-commerce-edge-3",
    source: "customer-account",
    target: "add-to-cart",
  },
  { id: "e-commerce-edge-4", source: "add-to-cart", target: "order-checkout" },
  {
    id: "e-commerce-edge-5",
    source: "order-checkout",
    target: "order-payment",
  },
  {
    id: "e-commerce-order-payment-edge-1",
    source: "order-payment",
    target: "payment-initiated",
    animated: true,
    label: "proceed to payment",
  },
  {
    id: "e-commerce-order-payment-edge-2",
    source: "payment-successful",
    target: "order-confirmation",
    animated: true,
    label: "after successful payment",
  },
  { id: "e-commerce-edge-6", source: "order-payment", target: "order-confirmation" },
  {
    id: "e-commerce-edge-7",
    source: "customer-account",
    target: "customer-wishlist",
  },
  { id: "e-commerce-edge-8", source: "order-confirmation", target: "cancel-order" },
  {
    id: "e-commerce-edge-9",
    source: "cancel-order",
    target: "order-payment-return",
  },
  {
    id: "e-commerce-edge-10",
    source: "customer-account",
    target: "manage-profile",
  },
  {
    id: "e-commerce-edge-11",
    source: "manage-profile",
    target: "manage-address",
  },
] as Edge[];
