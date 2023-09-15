import { dialog, closeDialog } from "./DialogManage";
import { graphInstance } from "../service/GraphInstance";
import Sigma from "sigma";

export function registerCloseButtonEvent(closeBtn: Element) {
  if (closeBtn) {
    closeBtn.addEventListener("click", closeDialog);
  }
}

export function registerNodeClickEvent(renderer: Sigma) {
  renderer.on("clickNode", (event) => {
    const nodeId = event.node;
    const nodeData = graphInstance().getNodeAttributes(nodeId);

    const nodeInfo = document.getElementById("nodeInfo"); // ID名は適宜調整
    if (nodeInfo) {
      nodeInfo.innerHTML = `
        Node clicked:<br>
        - ID: ${nodeId}<br>
        - X: ${nodeData.x}<br>
        - Y: ${nodeData.y}<br>
        - Color: ${nodeData.color || "N/A"}
      `;
    }

    if (dialog) {
      dialog.showModal();
    }
  });
}
