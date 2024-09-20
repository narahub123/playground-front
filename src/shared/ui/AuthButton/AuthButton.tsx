import "./AuthButton.css";

interface AuthButtonProps {
  imgUrl: string;
  text: string;
}

const AuthButton = ({ imgUrl, text }: AuthButtonProps) => {
  return (
    <div className="auth-button">
      {imgUrl && (
        <span className="auth-button-img-wrapper">
          <img src={imgUrl} alt="" className="auth-button-img" />
        </span>
      )}
      <span className={`auth-button-text-wrapper${imgUrl ? "" : " solo"}`}>
        <p className="auth-button-text">{text}</p>
      </span>
    </div>
  );
};

export default AuthButton;
