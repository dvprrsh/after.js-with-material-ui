import { asyncComponent } from "@jaredpalmer/after";
import React from "react";

export default [
  {
    path: "/",
    exact: true,
    component: asyncComponent({
      loader: () => import("./views/Home"),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
];
