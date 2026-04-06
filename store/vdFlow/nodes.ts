import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "vd-registered",
    position: { x: 900, y: 400 },
    data: { label: "VD Registered" },
  },
  {
    id: "vd-verified",
    position: { x: 900, y: 500 },
    data: { label: "VD Verified" },
  },
  {
    id: "vd-login",
    position: { x: 900, y: 600 },
    data: { label: "VD Login" },
  },
  {
    id: "vd-received-parcel",
    position: { x: 900, y: 700 },
    data: { label: "VD Received Parcel From Destination Mini Hub" },
  },
  {
    id: "vd-at-customer-location",
    position: { x: 900, y: 800 },
    data: { label: "VD At Customer Location" },
  },
  {
    id: "customer-accept-order",
    position: { x: 800, y: 900 },
    data: { label: "Customer Accept Order" },
  },
  {
    id: "customer-cancel-order",
    position: { x: 1000, y: 900 },
    data: { label: "Customer Cancel Order" },
  },

  {
    id: "vd-delivered-parcel",
    position: { x: 800, y: 1000 },
    data: { label: "VD Delivered Parcel" },
  },
  {
    id: "vd-return-parcel",
    position: { x: 1000, y: 1000 },
    data: { label: "VD Return Parcel to Destination Mini Hub" },
  },
] as AppNode[];
