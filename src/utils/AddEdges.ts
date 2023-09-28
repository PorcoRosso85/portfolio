import Graph from "graphology";
import { AddEdgeParams } from "../interface/AddEdgeParams";

export const addingEdges = (graph: Graph, edgeDataArray: AddEdgeParams[]) => {
  edgeDataArray.forEach((edgeData) => {
    graph.addEdge(...edgeData);
  });
};
