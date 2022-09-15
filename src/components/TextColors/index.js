import { useSelector } from "react-redux";

function TextColors() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);

  // const [firstColor, lastColor] = useSelector((state) => [
  //   state.firstColor,
  //   state.lastColor,
  // ]);

  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>-
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
}

export default TextColors;
