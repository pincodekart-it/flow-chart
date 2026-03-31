import { type Edge } from "@xyflow/react";
import { initialEdges as orderPaymentEdges } from "../orderPaymentFlow/edges";
import { initialEdges as customerEdges } from "../customerFlow/edges";
import { initialEdges as checkoutEdges } from "../checkoutFlow/edges";

export const initialEdges = [
  ...orderPaymentEdges,
  ...customerEdges,
  ...checkoutEdges,
  {
    id: "e-commerce-order-payment-edge-1",
    source: "checkout-flow-payment",
    target: "payment-initiated",
    animated: true,
    label: "proceed to payment",
  },
  {
    id: "e-commerce-order-payment-edge-2",
    source: "payment-successful",
    target: "order-confirmed",
    animated: true,
    label: "after successful payment",
  },
  ...customerEdges,
  {
    id: "e-commerce-customer-edge-1",
    source: "customer-flow-cart",
    target: "checkout-flow-checkout",
    animated: true,
    label: "from account to checkout",
  },
] as Edge[];
