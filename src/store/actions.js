export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const changeColor = (color, position) => ({
  type: CHANGE_COLOR,
  // propriété raccourcie, équivalent de color: color
  color,
  position,
});

export const changeDirection = (angle) => ({
  type: CHANGE_DIRECTION,
  angle: `${angle}deg`,
});
