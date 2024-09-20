import { createBrowserRouter } from "react-router-dom";
import PlayGround from "../widgets/PlayGround";
import { NotFound } from "@/pages/Error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayGround />,
    errorElement: <NotFound />,
    children: [],
  },
]);
