import { ListInput, NormalInput, WideButton } from "@/shared/ui";
import "./NameGenderEmailBirth.css";
import { useState } from "react";

import { dateList, monthList, yearList } from "@/shared/data";
import { SigninType } from "@/shared/types";

interface BirthType {
  year: number;
  month: number;
  date: number;
}

const NameGenderEmailBirth = () => {
  const MAX_NAME = 50;
  const [signinInfo, setSigninInfo] = useState<SigninType>();
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const [birth, setBirth] = useState<BirthType>();

  const genderList = [
    { name: "남성", value: "m" },
    { name: "여성", value: "f" },
    { name: "양성", value: "b" },
    { name: "중성", value: "n" },
    { name: "숨김", value: "h" },
  ];

  return (
    <div className="email-signup-modal-main">
      <section className="email-signup-modal-header">
        <p className="email-signup-modal-header-title">계정을 생성해주세요.</p>
      </section>
      <section className="email-signup-modal-content">
        <NormalInput
          title="이름"
          id="username"
          limit={MAX_NAME}
          value={signinInfo?.username}
          setValue={setSigninInfo}
        />
        <NormalInput
          title="성별"
          id="gender"
          list={genderList}
          value={signinInfo?.gender}
          setValue={setSigninInfo}
        />
        <NormalInput
          title="이메일"
          id="email"
          value={signinInfo?.email}
          setValue={setSigninInfo}
        />
        <div className="email-signup-modal-item">
          <p className="email-signup-modal-item-title">생년월일</p>
          <p className="email-signup-modal-item-detail">
            이정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
            주제에 상관없이 나의 연령을 확인하세요.
          </p>
          <div className="email-signup-modal-item-container">
            <ListInput
              title="년"
              id="year"
              unit="년"
              value={birth?.year}
              setValue={setBirth}
              list={yearList}
            />
            <ListInput
              title="월"
              id="month"
              unit="월"
              value={birth?.month}
              setValue={setBirth}
              list={monthList}
            />
            <ListInput
              title="일"
              id="date"
              unit="일"
              value={birth?.date}
              setValue={setBirth}
              list={dateList(birth?.year, birth?.month)}
            />
          </div>
        </div>
      </section>
      <section className="email-signup-modal-footer">
        <WideButton text={"다음"} isValid={isValid} loading={loading} />
      </section>
    </div>
  );
};

export default NameGenderEmailBirth;
