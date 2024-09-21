import { LuChevronDown } from "react-icons/lu";
import "./ListInput.css";
import { useRef, useState } from "react";
import useClickOutside from "@/shared/hooks/useClickOutside";

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
  const [focused, setFocused] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  useClickOutside(containerRef, setFocused);
  useClickOutside(containerRef, setOpenDropdown);

  const condition = focused ? " focused" : "";
  const openCond = openDropdown ? " open" : "";

  const handleSelect = (value: string | number) => {
    setValue((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div
      className={`list-input${condition}`}
      ref={containerRef}
      onFocus={() => {
        setFocused(true);
        setOpenDropdown(true);
      }}
      onBlur={() => {
        setFocused(false);
        setOpenDropdown(false);
      }}
      tabIndex={0}
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
      <ul className={`list-input-list${openCond}`}>
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
