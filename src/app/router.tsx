import { createBrowserRouter } from "react-router-dom";
import PlayGround from "../widgets/PlayGround";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
    children: [],
  },
]);
