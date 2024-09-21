import { useRef, useState } from "react";
import "./NormalInput.css";
import { debounce } from "@/shared/utils";
import useClickOutside from "@/shared/hooks/useClickOutside";

interface NormalInputProps {
  title: string;
  id: string;
  limit?: number;
  list?: any[];
  value: string | number | undefined;
  setValue: React.Dispatch<React.SetStateAction<any | undefined>>;
}

const NormalInput = ({
  title,
  id,
  limit = 0,
  list,
  value,
  setValue,
}: NormalInputProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [text, setText] = useState("");

  const condition = focused || text !== "" || value ? " focused" : "";
  const openCond = openDropdown ? " open" : "";

  // 텍스트 박스 이외 클릭시 focused 풀기
  useClickOutside(containerRef, setFocused);

  // 드롭박스 외부 클릭시 닫힘
  useClickOutside(containerRef, setOpenDropdown);

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

  // 선택
  const handleSelect = (value: any) => {
    setValue((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const getName = (value: any) => {
    if (!list) return;

    return list.find((item) => item.value === value)?.name;
  };

  return (
    <div
      className={`normal-input${condition}`}
      onClick={() => {
        setFocused(true);
        setOpenDropdown(!openDropdown);
      }}
      ref={containerRef}
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
      />
      {list && (
        <ul className={`normal-input-list${openCond}`}>
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
  );
};

export default NormalInput;
