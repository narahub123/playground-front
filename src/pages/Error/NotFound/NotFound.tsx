import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h1 className="not-found-title">Page Not Found</h1>
        <section className="not-found-text-container">
          <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
          <p>존재하지 않는 주소를 입력하셨거나,</p>
          <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
        </section>
        <section className="not-found-btn-container">
          {/* 버튼은 공용 디자인을 사용하게 될 수도 있음 */}
          <button className="not-found-btn" onClick={() => navigate("/")}>
            홈으로
          </button>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
