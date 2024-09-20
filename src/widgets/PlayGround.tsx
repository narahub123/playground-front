import { ModeButton } from "@/features/theme";
import { Outlet } from "react-router-dom";

function PlayGround() {
  return (
    <>
      <ModeButton />
      <Outlet />
    </>
  );
}

export default PlayGround;
