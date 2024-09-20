import { LuLoader2 } from "react-icons/lu";
import "./WideButton.css";

interface WideButtonProps {
  text: string;
  isValid: boolean;
  loading: boolean;
}

const WideButton = ({ text, isValid, loading }: WideButtonProps) => {
  return (
    <button className={`wide-button${isValid ? " valid" : ""}`}>
      {loading ? <LuLoader2 className="wide-button-spinner icon" /> : text}
    </button>
  );
};

export default WideButton;
