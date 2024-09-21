import { LuX } from "react-icons/lu";
import "./EmailSignupModal.css";
import NameGenderEmailBirth from "./NameGenderEmailBirth";

interface EmailSignupModalProps {
  setOpenEmailSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailSignupModal = ({
  setOpenEmailSignupModal,
}: EmailSignupModalProps) => {
  return (
    <div className="email-signup-modal">
      <div className="email-signup-modal-container">
        {/* 모달창 닫기 */}
        <LuX
          className="email-signup-modal-close"
          onClick={() => setOpenEmailSignupModal(false)}
        />
        {/* 유저 이름, 성별, 이메일, 생년월일 입력 */}
        <NameGenderEmailBirth />
      </div>
    </div>
  );
};

export default EmailSignupModal;
