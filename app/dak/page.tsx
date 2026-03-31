"use client";
import { Background, ReactFlow, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export default function Page() {
  const initialNodes = [
    {
      id: "n1",
      data: { label: "Node 1" },
      position: { x: 0, y: 0 },
      type: "input",
    },
    {
      id: "n2",
      data: { label: "Node 2" },
      position: { x: 100, y: 100 },
    },
  ];
  const initialEdges = [
    {
      id: "n1-n2",
      source: "n1",
      target: "n2",
      label: "connects with",
      type: "step",
    },
  ];

  return (
    <div>
      <ReactFlow
        width={700}
        height={700}
        nodes={initialNodes}
        edges={initialEdges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
