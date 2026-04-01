import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "logistic-flow-node-1",
    position: { x: 0, y: 500 },
    data: { label: "Origin mini hub picked parcel from manufacture" },
  },
  {
    id: "logistic-flow-node-2",
    position: { x: 0, y: 600 },
    data: { label: "Origin mini hub received parcel" },
  },
  {
    id: "logistic-flow-node-3",
    position: { x: 0, y: 700 },
    data: { label: "Origin mini hub bagging parcel" },
  },
  {
    id: "logistic-flow-node-4",
    position: { x: 0, y: 800 },
    data: { label: "Origin city hub send mini trip to pickup bags from origin mini hub" },
  },
  {
    id: "logistic-flow-node-5",
    position: { x: 200, y: 500 },
    data: { label: "Origin city hub received mini trip, bags, parcels" },
  },
  {
    id: "logistic-flow-node-6",
    position: { x: 200, y: 600 },
    data: { label: "Origin city hub sorting parcels for destination city hub" },
  },
  {
    id: "logistic-flow-node-7",
    position: { x: 200, y: 700 },
    data: { label: "Origin city hub create bags for destination city hub" },
  },
  {
    id: "logistic-flow-node-8",
    position: { x: 200, y: 800 },
    data: { label: "Origin city hub create city trip and load bags and dispatched trip" },
  },
  {
    id: "logistic-flow-node-9",
    position: { x: 400, y: 500 },
    data: { label: "Destination city hub received trip, bags, parcels" },
  },
  {
    id: "logistic-flow-node-10",
    position: { x: 400, y: 600 },
    data: { label: "Destination city hub sorting parcel for destination mini hub" },
  },
  {
    id: "logistic-flow-node-11",
    position: { x: 400, y: 700 },
    data: { label: "Destination city hub create bags for destination mini hub" },
  },
  {
    id: "logistic-flow-node-12",  
    position: { x: 400, y: 800 },
    data: { label: "Destination city hub create destination mini hub trip" },
  },
  {
    id: "logistic-flow-node-13",
    position: { x: 600, y: 500 },
    data: { label: "Destination city hub load bags" },
  },
  {
    id: "logistic-flow-node-14",
    position: { x: 600, y: 600 },
    data: { label: "Destination city hub dispatch trip to destination mini hub" },
  },
  {
    id: "logistic-flow-node-15",
    position: { x: 600, y: 700 },
    data: { label: "Destination mini hub received trip, bags, parcels" },
  },
  {
    id: "logistic-flow-node-16",
    position: { x: 600, y: 800 },
    data: { label: "Destination mini hub parcel assigned to VD" },
  }
  
  
] as AppNode[];
