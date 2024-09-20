import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./ModeButton.css";
import { useEffect, useState } from "react";

const ModeButton = () => {
  // 다크 모드 여부 확인
  const [isDark, setIsDark] = useState(false);

  // isDark의 변화에 따른 모든 변경
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("color-theme", "dark");
    } else {
      document.documentElement.setAttribute("color-theme", "light");
    }
  }, [isDark]);

  // 모드 변경 메서드
  const handleMode = () => {
    setIsDark(!isDark);
  };

  return (
    <p className="mode-button" onClick={() => handleMode()}>
      {!isDark ? (
        <MdDarkMode className="icon" />
      ) : (
        <MdLightMode className="icon" />
      )}
    </p>
  );
};

export default ModeButton;
