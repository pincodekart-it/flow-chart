import { type AppNode } from "./types";
import { initialNodes as orderPaymentNodes } from "../orderPaymentFlow/nodes";
import { initialNodes as customerNodes } from "../customerFlow/nodes";
import { initialNodes as checkoutNodes } from "../checkoutFlow/nodes";
import { initialNodes as manufactureNodes } from "../manufactureFlow/nodes";
import { initialNodes as logisticNodes } from "../logisticFlow/nodes";
import { initialNodes as vdNodes } from "../vdFlow/nodes";

export const initialNodes = [
  ...orderPaymentNodes,
  ...customerNodes,
  ...checkoutNodes,
  ...manufactureNodes,
  ...logisticNodes,
  ...vdNodes,
] as AppNode[];
