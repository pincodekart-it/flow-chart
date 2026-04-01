import { type AppNode } from "./types";

export const initialNodes = [
  {
    id: "logistic-flow-node-1",
    position: { x: 0, y: 500 },
    data: { label: "Origin Mini Hub Picked Parcel From Manufacture" },
  },
  {
    id: "logistic-flow-node-2",
    position: { x: 0, y: 600 },
    data: { label: "Origin Mini Hub Received Parcel" },
  },
  {
    id: "logistic-flow-node-3",
    position: { x: 0, y: 700 },
    data: { label: "Origin Mini Hub Bagging Parcel" },
  },
  {
    id: "logistic-flow-node-4",
    position: { x: 0, y: 800 },
    data: { label: "Origin City Hub Send Mini Trip to Pickup Bags from Origin Mini Hub" },
  },
  {
    id: "logistic-flow-node-5",
    position: { x: 200, y: 500 },
    data: { label: "Origin City Hub Received Mini Trip, Bags, Parcels" },
  },
  {
    id: "logistic-flow-node-6",
    position: { x: 200, y: 600 },
    data: { label: "Origin City Hub Sorting Parcels for Destination City Hub" },
  },
  {
    id: "logistic-flow-node-7",
    position: { x: 200, y: 700 },
    data: { label: "Origin City Hub Create Bags for Destination City Hub" },
  },
  {
    id: "logistic-flow-node-8",
    position: { x: 200, y: 800 },
    data: { label: "Origin City Hub Create City Trip and Load Bags and Dispatched Trip" },
  },
  {
    id: "logistic-flow-node-9",
    position: { x: 400, y: 500 },
    data: { label: "Destination City Hub Received Trip, Bags, Parcels" },
  },
  {
    id: "logistic-flow-node-10",
    position: { x: 400, y: 600 },
    data: { label: "Destination City Hub Sorting Parcel for Destination Mini Hub" },
  },
  {
    id: "logistic-flow-node-11",
    position: { x: 400, y: 700 },
    data: { label: "Destination City Hub Create Bags for Destination Mini Hub" },
  },
  {
    id: "logistic-flow-node-12",  
    position: { x: 400, y: 800 },
    data: { label: "Destination City Hub Create Destination Mini Hub Trip" },
  },
  {
    id: "logistic-flow-node-13",
    position: { x: 600, y: 500 },
    data: { label: "Destination City Hub Load Bags" },
  },
  {
    id: "logistic-flow-node-14",
    position: { x: 600, y: 600 },
    data: { label: "Destination City Hub Dispatch Trip to Destination Mini Hub" },
  },
  {
    id: "logistic-flow-node-15",
    position: { x: 600, y: 700 },
    data: { label: "Destination Mini Hub Received Trip, Bags, Parcels" },
  },
  {
    id: "logistic-flow-node-16",
    position: { x: 600, y: 800 },
    data: { label: "Destination Mini Hub Parcel Assigned to VD" },
  }
  
  
] as AppNode[];
