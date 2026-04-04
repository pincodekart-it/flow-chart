import { type Edge } from "@xyflow/react";
import { initialEdges as orderPaymentEdges } from "../orderPaymentFlow/edges";
import { initialEdges as customerEdges } from "../customerFlow/edges";
import { initialEdges as checkoutEdges } from "../checkoutFlow/edges";
import { initialEdges as manufactureEdges } from "../manufactureFlow/edges";
import { initialEdges as logisticEdges } from "../logisticFlow/edges";
import { initialEdges as vdEdges } from "../vdFlow/edges";

export const initialEdges = [
  ...orderPaymentEdges,
  ...customerEdges,
  ...checkoutEdges,
  ...manufactureEdges,
  ...logisticEdges,
  ...vdEdges,
  {
    id: "e-commerce-order-payment-edge-1",
    source: "checkout-flow-payment",
    target: "payment-initiated",
    animated: true,
    label: "proceed to payment",
    type: "step",
  },
  {
    id: "e-commerce-order-payment-edge-2",
    source: "payment-successful",
    target: "checkout-flow-confirmed",
    animated: true,
    label: "after successful payment",
    type: "step",
  },
  {
    id: "e-commerce-customer-edge-1",
    source: "customer-flow-cart",
    target: "checkout-flow-checkout",
    animated: true,
    label: "from account to checkout",
    type: "step",
  },
  {
    id: "e-commerce-customer-edge-2",
    source: "checkout-flow-confirmed",
    target: "manufacture-flow-initiated",
    animated: true,
    label: "after checkout confirmation",
    type: "step",
  },
  {
    id: "e-commerce-manufacture-edge-1",
    source: "manufacture-flow-awb-generated",
    target: "logistic-flow-node-1",
    animated: true,
    label: "after manufacturing",
    type: "step",
  },
  {
    id: "e-commerce-logistic-edge-1",
    source: "logistic-flow-node-16",
    target: "vd-flow-node-4",
    animated: true,
    label: "after logistic pickup",
    type: "step",
  },
] as Edge[];
