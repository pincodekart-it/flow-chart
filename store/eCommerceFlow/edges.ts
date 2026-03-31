import { type Edge } from "@xyflow/react";
import { initialEdges as orderPaymentEdges } from "../orderPaymentFlow/edges";
import { initialEdges as customerEdges } from "../customerFlow/edges";

export const initialEdges = [
  ...orderPaymentEdges,
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
  ...customerEdges,
  {
    id: "e-commerce-customer-edge-1",
    source: "customer-flow-cart",
    target: "order-checkout",
    animated: true,
    label: "from account to checkout",
  },
  {
    id: "e-commerce-edge-2",
    source: "order-checkout",
    target: "order-payment",
  },

  {
    id: "e-commerce-edge-3",
    source: "order-payment",
    target: "order-confirmation",
  },
  {
    id: "e-commerce-edge-4",
    source: "order-confirmation",
    target: "cancel-order",
  },
  {
    id: "e-commerce-edge-5",
    source: "cancel-order",
    target: "order-payment-return",
  },
] as Edge[];
