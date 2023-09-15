import Graph from "graphology";
import { AddEdgeParams } from "../interface/AddEdgeParams";

export const addingEdge = (graph: Graph) => {
  const params: AddEdgeParams = ["n1", 2, { id: "e1" }];
  graph.addEdge(...params);
};
