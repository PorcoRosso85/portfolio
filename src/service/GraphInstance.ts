import Graph from "graphology";

import { addingNode } from "../utils/AddNodes";
import { addingEdge } from "../utils/AddEdges";

export const graphInstance = () => {
  const graph = new Graph();

  addingNode(graph);
  addingEdge(graph);

  return graph;
};
