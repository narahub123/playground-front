import { createBrowserRouter } from "react-router-dom";
import PlayGround from "../PlayGround";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
    children: [],
  },
]);
