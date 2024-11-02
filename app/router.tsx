import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "app/routeTree.gen";

export const createRouter = () => {
  const router = createTanStackRouter({
    routeTree,
  });

  return router;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
