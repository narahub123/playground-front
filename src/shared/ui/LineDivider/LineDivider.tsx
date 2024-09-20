import "./LineDivider.css";

interface LineDividerProps {
  text: string;
}

const LineDivider = ({ text }: LineDividerProps) => {
  return (
    <div className="line-divider">
      <p className="line-divider-line" />
      <p className="line-divider-text">{text}</p>
      <p className="line-divider-line" />
    </div>
  );
};

export default LineDivider;
