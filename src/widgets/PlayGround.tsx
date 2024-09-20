import { ModeButton } from "@/shared/ui";
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
