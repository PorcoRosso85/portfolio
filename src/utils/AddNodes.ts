import Graph from "graphology";
import { AddNodeParams } from "../interface/AddNodeParams";

export const addingNodes = (graph: Graph, nodeDataArray: AddNodeParams[]) => {
  nodeDataArray.forEach((nodeData) => {
    graph.addNode(...nodeData);
  });
};
