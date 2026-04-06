import { type Edge } from "@xyflow/react";

export const initialEdges = [
  {
    id: "vd-registered-to-vd-verified",
    source: "vd-registered",
    target: "vd-verified",
    type: "step",
  },
  {
    id: "vd-verified-to-vd-login",
    source: "vd-verified",
    target: "vd-login",
    type: "step",
  },
  {
    id: "vd-login-to-vd-received-parcel",
    source: "vd-login",
    target: "vd-received-parcel",
    type: "step",
  },
  {
    id: "vd-received-parcel-to-vd-at-customer-location",
    source: "vd-received-parcel",
    target: "vd-at-customer-location",
    type: "step",
  },
  {
    id: "vd-received-parcel-to-customer-cancel-order",
    source: "vd-at-customer-location",
    target: "customer-cancel-order",
    type: "step",
  },
  {
    id: "vd-at-customer-location-to-customer-accept-order",
    source: "vd-at-customer-location",
    target: "customer-accept-order",
    type: "step",
  },
  { 
    id: "customer-accept-order-to-vd-delivered-parcel",
    source: "customer-accept-order",
    target: "vd-delivered-parcel",
    type: "step",
  },
  {
    id: "customer-cancel-order-to-vd-return-parcel",
    source: "customer-cancel-order",
    target: "vd-return-parcel",
    type: "step",
  }
] as Edge[];
