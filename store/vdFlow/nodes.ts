import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "vd-flow-node-1",
    position: { x: 800, y: 300 },
    data: { label: "Received Parcel From Destination Mini Hub" },
  },
  {
    id: "vd-flow-node-2",
    position: { x: 800, y: 400 },
    data: { label: "Delivered To Customer" },
  },
  {
    id: "vd-flow-node-3",
    position: { x: 800, y: 500 },
    data: { label: "Customer Cancel Order" },
  },
  {
    id: "vd-flow-node-4",
    position: { x: 800, y: 600 },
    data: { label: "Return Parcel To Destination Mini Hub" },
  },
] as AppNode[];
