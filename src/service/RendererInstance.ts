import Graph from "graphology";
import Sigma from "sigma";

export const rendererInstance = (
  graphInstance: Graph,
  container: HTMLElement,
  settings?: {}
): Sigma => {
  const renderer = new Sigma(graphInstance, container, settings);

  return renderer;
};
