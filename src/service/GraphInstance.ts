import Graph from "graphology";

import { addingNodes } from "../utils/AddNodes";
import { addingEdges } from "../utils/AddEdges";

import { nodeDataArray } from "../repositories/NodeDatas";
import { edgeDataArray } from "../repositories/EdgeDatas";

export const graphInstance = () => {
  try {
    const graph = new Graph();
    addingNodes(graph, nodeDataArray);
    addingEdges(graph, edgeDataArray);
    return graph;
  } catch (error) {
    console.error("An error occurred while creating the graph: ", error);
    // 必要に応じて代わりのGraphオブジェクトを返すか、エラーを投げる
    // return new Graph(); // 代わりのGraphオブジェクト
    throw error; // エラーを投げる場合
  }
};
