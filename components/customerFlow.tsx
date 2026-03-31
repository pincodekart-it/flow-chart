import { useShallow } from "zustand/react/shallow";
import { ReactFlow, Controls, MiniMap, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import useStore from "../store/customerFlow/store";
import { useRouter } from "next/navigation";

const selector = (state: any) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});
export default function Flow() {
  const router = useRouter();
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector),
  );

  const onNodeClick = (event: any, node: any) => {
    console.log("Node clicked:", node);
  };

  const onNodeDoubleClick = (event: any, node: any) => {
    console.log("Node double-clicked:", node);
    if (node.id == "order-payment") {
      router.push("/order-payment");
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
