import "./EmailSignupModal.css";

interface EmailSignupModalProps {
  setOpenEmailSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailSignupModal = ({
  setOpenEmailSignupModal,
}: EmailSignupModalProps) => {
  return (
    <div className="email-signup-modal">
      <div className="email-signup-modal-container"></div>
    </div>
  );
};

export default EmailSignupModal;
