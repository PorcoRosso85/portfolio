// import { container } from "../../ddd/utils/gettingContainer";
import { graphInstance } from "../../service/GraphInstance";
import { rendererInstance } from "../../service/RendererInstance";
import {
  registerCloseButtonEvent,
  registerNodeClickEvent,
} from "../../utils/EventHandler";
import React, { ReactElement, useEffect, useRef } from "react";

function App(): ReactElement | null {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (container) {
      // サイズを確認
      if (container.clientWidth === 0 || container.clientHeight === 0) {
        // 初期サイズを設定
        container.style.width = "600px";
        container.style.height = "450px";
      }

      const renderer = rendererInstance(graphInstance(), container, {
        allowInvalidContainer: true,
      });
      renderer.refresh();

      const closeBtn = document.querySelector(".closeBtn");
      if (closeBtn !== null) {
        registerCloseButtonEvent(closeBtn);
        registerNodeClickEvent(renderer);
      }
    }
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}

export default App;
