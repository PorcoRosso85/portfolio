// このファイルは、ノード情報をイテレータで返すサービスです

import Graph from "graphology";

export const NodeAggregation = (graph: Graph): Array<[string, any]> => {
  if (!graph) {
    throw new Error("Graph cannot be null or undefined");
  }

  const result: Array<[string, any]> = [];

  try {
    graph.mapNodes((node, attributes) => {
      if (node && attributes) {
        result.push([node, attributes]);
      }
    });
  } catch (error) {
    console.error("An error occurred: ", error);
    return [];
  }

  return result;
};
