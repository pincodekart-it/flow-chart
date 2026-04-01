import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "vd-flow-node-1",
    position: { x: 800, y: 300 },
    data: { label: "Received parcel from mini hub" },
  },
  {
    id: "vd-flow-node-2",
    position: { x: 800, y: 400 },
    data: { label: "Delivered to customer" },
  },
  {
    id: "vd-flow-node-3",
    position: { x: 800, y: 500 },
    data: { label: "Customer cancel order" },
  },
  {
    id: "vd-flow-node-4",
    position: { x: 800, y: 600 },
    data: { label: "Return parcel to destination mini hub" },
  },
] as AppNode[];
