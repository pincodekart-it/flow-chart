import { type AppNode } from "./types";
import { initialNodes as orderPaymentNodes } from "../orderPaymentFlow/nodes";
import { initialNodes as customerNodes } from "../customerFlow/nodes";
import { initialNodes as checkoutNodes } from "../checkoutFlow/nodes";
export const initialNodes = [
  ...orderPaymentNodes,
  ...customerNodes,
  ...checkoutNodes,
] as AppNode[];
