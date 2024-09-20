import "./Auth.css";
import { AuthButton, LineDivider } from "@/shared/ui";
import { EmailSignupModal } from "@/features/EmailSignupModal";
import { useState } from "react";

const Auth = () => {
  const [openEmailSignupModal, setOpenEmailSignupModal] = useState(false);
  return (
    <>
      <div className="auth">
        <div className="auth-container">
          <section className="auth-signup">
            <p className="auth-section-title">지금 가입하세요.</p>
            <div className="auth-signup-list">
              <AuthButton
                imgUrl="images/google-logo.webp"
                text="구글에서 가입하기"
              />
              <AuthButton
                imgUrl="images/naver-logo.webp"
                text="네이버에서 가입하기"
              />
              <AuthButton
                imgUrl="images/kakao-logo.webp"
                text="카카오에서 가입하기"
              />
              <LineDivider text="또는" />
              <div
                className="auth-item-wrapper"
                onClick={() => setOpenEmailSignupModal(!openEmailSignupModal)}
              >
                <AuthButton imgUrl="" text="이메일로 가입하기" />
              </div>
            </div>
          </section>
          <section className="auth-login">
            <p className="auth-section-title">이미 가입하셨나요?</p>
            <AuthButton imgUrl="" text="로그인" />
          </section>
        </div>
      </div>
      {openEmailSignupModal && (
        <EmailSignupModal setOpenEmailSignupModal={setOpenEmailSignupModal} />
      )}
    </>
  );
};

export default Auth;
