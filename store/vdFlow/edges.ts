import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "vd-flow-edge-1",
    source: "vd-registered",
    target: "vd-verified",
    type: "step",
  },
  {
    id: "vd-flow-edge-2",
    source: "vd-verified",
    target: "vd-login",
    type: "step",
  },
  {
    id: "vd-flow-edge-3",
    source: "vd-login",
    target: "vd-received-parcel",
    type: "step",
  },
  {
    id: "vd-flow-edge-4",
    source: "vd-received-parcel",
    target: "customer-accept-order",
    type: "step",
  },
  {
    id: "vd-flow-edge-5",
    source: "vd-received-parcel",
    target: "customer-cancel-order",
    type: "step",
  },
  { 
    id: "vd-flow-edge-6",
    source: "customer-accept-order",
    target: "vd-delivered-parcel",
    type: "step",
  },
  {
    id: "vd-flow-edge-7",
    source: "customer-cancel-order",
    target: "vd-return-parcel",
    type: "step",
  }
] as Edge[];
