import { useSelector } from "react-redux";

function Gradient() {
  const direction = useSelector((state) => state.direction);
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);

  return (
    <div
      style={{
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
      }}
      id="gradient"
    />
  );
}

export default Gradient;
