function TextColors() {
  const firstColor = 'red';
  const lastColor = 'blue';

  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      -
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
}

export default TextColors;
