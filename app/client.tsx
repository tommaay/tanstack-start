/// <reference types="vinxi/types/client" />

import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/start";
import { createRouter } from "app/router";

const router = createRouter();

const root = document.getElementById("root");
if (!root) {
  throw new Error("No root element found");
}

hydrateRoot(root, <StartClient router={router} />);
