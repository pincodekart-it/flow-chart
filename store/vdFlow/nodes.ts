import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "vd-flow-node-1",
    position: { x: 800, y: 300 },
    data: { label: "received parcel from mini hub" },
  },
  {
    id: "vd-flow-node-2",
    position: { x: 800, y: 400 },
    data: { label: "delivered to customer" },
  },
  {
    id: "vd-flow-node-3",
    position: { x: 800, y: 500 },
    data: { label: "customer cancel order" },
  },
  {
    id: "vd-flow-node-4",
    position: { x: 800, y: 600 },
    data: { label: "return parcel to destination mini hub" },
  },
] as AppNode[];
