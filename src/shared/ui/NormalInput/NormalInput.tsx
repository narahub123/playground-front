import { useEffect, useRef, useState } from "react";
import "./NormalInput.css";
import { debounce } from "@/shared/utils";
import useClickOutside from "@/shared/hooks/useClickOutside";
import { useScrollToCenter } from "@/shared/hooks";

interface NormalInputProps {
  title: string;
  id: string;
  limit?: number;
  list?: any[];
  value: string | number | undefined;
  setValue: React.Dispatch<React.SetStateAction<any | undefined>>;
  tabIndex: number;
}

const NormalInput = ({
  title,
  id,
  limit = 0,
  list,
  value,
  setValue,
  tabIndex,
}: NormalInputProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [focused, setFocused] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const [index, setIndex] = useState(0);

  // input 박스에 focused 주기
  useEffect(() => {
    if (!focused || !inputRef.current) return;

    inputRef.current.focus();
  }, [focused]);

  // 텍스트 박스 이외 클릭시 focused 풀기
  useClickOutside(containerRef, setFocused);

  // 드롭박스 외부 클릭시 닫힘
  useClickOutside(containerRef, setOpenDropdown);

  // 스크롤 위치 조정
  useScrollToCenter(index, listRef, 4);

  const condition = focused || text !== "" || value ? " focused" : "";
  const openCond = openDropdown ? " open" : "";
  const validCond = valid ? " valid" : " invalid";

  // 글자 입력
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setText(value);
  };

  // 렌더링 횟수 줄이기
  const debouncedTextChange = debounce<typeof handleTextChange>(
    handleTextChange,
    300
  );

  // 선택 핸들러
  const handleSelect = (value: any) => {
    setValue((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  // value에 따른 표기
  const getName = (value: any) => {
    if (!list) return;

    return list.find((item) => item.value === value)?.name;
  };

  // 방향키로 값 선택하기
  const handleSelectByKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!list) return;

    let curIdx = index;

    if (e.key === "ArrowDown") {
      if (curIdx === list.length - 1) return;
      curIdx += 1;
    }
    if (e.key === "ArrowUp") {
      if (curIdx === 0) return;
      curIdx -= 1;
    }
    if (e.key === "Enter") {
      setOpenDropdown(!openDropdown);
    }
    if (e.key === "Escape") {
      setOpenDropdown(false);
    }

    const value = list[curIdx].value;

    setValue((prev: any) => ({
      ...prev,
      [id]: value,
    }));
    setIndex(curIdx);
  };

  return (
    <div className="normal-input-wrapper">
      <div
        className={`normal-input${condition}`}
        ref={containerRef}
        tabIndex={tabIndex} // tab 이동을 위해서 번호 주기
        onFocus={() => {
          setFocused(true);
          setOpenDropdown(true);
          // 처음 dropdown을 열 때 선택된 값이 없다면 첫번째 선택
          if (!value && list && list.length > 0) {
            setValue((prev: any) => ({
              ...prev,
              [id]: list[0].value, // 첫 번째 항목 선택
            }));
            setIndex(0); // 인덱스도 업데이트
          }
        }}
        onBlur={() => {
          setFocused(false);
          setOpenDropdown(false);
        }}
        onKeyDown={(e) => handleSelectByKeydown(e)}
      >
        <div className={`normal-input-info${condition}`}>
          <p className={`normal-input-info-title${condition}`}>{title}</p>
          {focused && limit !== 0 && (
            <p
              className={`normal-input-info-count`}
            >{`${text.length}/${limit}`}</p>
          )}
        </div>
        <input
          type="text"
          className={`normal-input-box${condition}`}
          onChange={!list ? debouncedTextChange : undefined}
          readOnly={!!list}
          value={list ? getName(value) : undefined}
          ref={inputRef}
        />
        {list && (
          <ul className={`normal-input-list${openCond}`} ref={listRef}>
            {list.map((item) => (
              <li
                key={item.value}
                className={`normal-input-list-item${
                  item.value === value ? " selected" : ""
                }`}
                onClick={() => handleSelect(item.value)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className={`normal-input-message ${validCond}`}>{message}</p>
    </div>
  );
};

export default NormalInput;
