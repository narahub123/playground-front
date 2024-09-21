import { LuChevronDown } from "react-icons/lu";
import "./ListInput.css";
import { useEffect, useRef, useState } from "react";
import { useClickOutside, useScrollToCenter } from "@/shared/hooks";

interface ListInputProps {
  title: string;
  id: string;
  unit: string;
  value: string | number | undefined;
  setValue: React.Dispatch<React.SetStateAction<any | undefined>>;
  list: (string | number)[];
}

const ListInput = ({
  title,
  id,
  unit,
  value,
  setValue,
  list,
}: ListInputProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [focused, setFocused] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [index, setIndex] = useState(0);
  useClickOutside(containerRef, setFocused);
  useClickOutside(containerRef, setOpenDropdown);

  // 스크롤 위치 조정
  useScrollToCenter(index, listRef, 4);

  const condition = focused || !!value ? " focused" : "";
  const openCond = openDropdown ? " open" : "";

  // 값 선택하기
  const handleSelect = (value: string | number) => {
    setValue((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  // 방향키로 값 선택하기
  const handleSelectByArrowKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
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

    const value = list[curIdx];

    setValue((prev: any) => ({
      ...prev,
      [id]: value,
    }));
    setIndex(curIdx);
  };

  return (
    <div
      className={`list-input${condition}`}
      ref={containerRef}
      onFocus={() => {
        setFocused(true);
        setOpenDropdown(true);
        // 처음 dropdown을 열 때 선택된 값이 없다면 첫번째 선택
        if (!value && list && list.length > 0) {
          setValue((prev: any) => ({
            ...prev,
            [id]: list[0], // 첫 번째 항목 선택
          }));
          setIndex(0); // 인덱스도 업데이트
        }
      }}
      onBlur={() => {
        setFocused(false);
        setOpenDropdown(false);
      }}
      tabIndex={0}
      onKeyDown={(e) => handleSelectByArrowKey(e)}
    >
      <div className="list-input-wrapper">
        <div className="list-input-info">
          <p className="list-input-info-title">{title}</p>
          <p className="list-input-info-value">{value}</p>
        </div>
        <div className="list-input-icon">
          <LuChevronDown className="icon" />
        </div>
      </div>
      <ul className={`list-input-list${openCond}`} ref={listRef}>
        {list.map((item) => (
          <li
            key={item}
            className={`list-input-item${item === value ? " selected" : ""}`}
            onClick={() => handleSelect(item)}
          >
            {item + unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInput;
