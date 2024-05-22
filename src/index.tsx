import { createRoot } from "react-dom/client";

import { App } from "./app";

function init() {
  const container = document.getElementById("root");
  if (!container) {
    console.log("root container not found");
    return;
  }

  const root = createRoot(container);

  root.render(<App />);
}

init();
