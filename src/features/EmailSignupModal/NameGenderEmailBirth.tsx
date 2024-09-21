import { NormalInput, WideButton } from "@/shared/ui";
import "./NameGenderEmailBirth.css";
import { useState } from "react";

const NameGenderEmailBirth = () => {
  const MAX_NAME = 50;
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <div className="email-signup-modal-main">
      <section className="email-signup-modal-header">
        <p className="email-signup-modal-header-title">계정을 생성해주세요.</p>
      </section>
      <section className="email-signup-modal-content">
        <NormalInput title="이름" id="username" limit={MAX_NAME} />
        <NormalInput title="이메일" id="email" />
      </section>
      <section className="email-signup-modal-footer">
        <WideButton text={"다음"} isValid={isValid} loading={loading} />
      </section>
    </div>
  );
};

export default NameGenderEmailBirth;
