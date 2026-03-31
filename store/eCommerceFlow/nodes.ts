import { type AppNode } from "./types";
import { initialNodes as orderPaymentNodes } from "../orderPaymentFlow/nodes";
import { initialNodes as customerNodes } from "../customerFlow/nodes";
import { initialNodes as checkoutNodes } from "../checkoutFlow/nodes";
import { initialNodes as manufactureNodes } from "../manufactureFlow/nodes";
export const initialNodes = [
  ...orderPaymentNodes,
  ...customerNodes,
  ...checkoutNodes,
  ...manufactureNodes,
] as AppNode[];
