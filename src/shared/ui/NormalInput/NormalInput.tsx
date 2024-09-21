import { useRef, useState } from "react";
import "./NormalInput.css";
import { debounce } from "@/shared/utils";
import useClickOutside from "@/shared/hooks/useClickOutside";

interface NormalInputProps {
  title: string;
  id: string;
  limit?: number;
}

const NormalInput = ({ title, id, limit = 0 }: NormalInputProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const condition = focused || text !== "" ? " focused" : "";

  // 텍스트 박스 이외 클릭시 focused 풀기
  useClickOutside(containerRef, setFocused);

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

  return (
    <div
      className={`normal-input${condition}`}
      onClick={() => setFocused(true)}
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
        onChange={debouncedTextChange}
      />
    </div>
  );
};

export default NormalInput;
