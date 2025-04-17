import { ReactNode } from "react";

type TRouteItems = {
  index?: boolean;
  path?: string;
  element: ReactNode;
};

export const generateUserRoutes = (items: TRouteItems[]) => {
  const routes = items.reduce((acc: TRouteItems[], item) => {
    if (item.index) {
      acc.push({
        index: item.index,
        element: item.element,
      });
    }

    if (item.path) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    return acc;
  }, []);

  return routes;
};
