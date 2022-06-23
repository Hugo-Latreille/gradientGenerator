function Gradient() {
  const direction = '90deg';
  const firstColor = 'red';
  const lastColor = 'blue';

  return (
    <div
      style={{ background: `linear-gradient(${direction},${firstColor},${lastColor})` }}
      id="gradient"
    />
  );
}

export default Gradient;
