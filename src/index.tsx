import { createRoot } from "react-dom/client";

import { AppRouter } from "./router";

function init() {
  const container = document.getElementById("root");
  if (!container) {
    console.log("root container not found");
    return;
  }

  const root = createRoot(container);

  root.render(<AppRouter />);
}

init();
