import { useDispatch } from 'react-redux';

function DirectionButtons() {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="to45"
        onClick={() => dispatch({ type: 'CHANGE_DIRECTION', angle: '45deg' })}
      >
        to 45
      </button>
      <button type="button" className="button" id="to90">to 90</button>
      <button type="button" className="button" id="to135">to 135</button>
      <button type="button" className="button" id="to225">to 225</button>
      <button type="button" className="button" id="to270">to 270</button>
      <button type="button" className="button" id="to315">to 315</button>
    </div>
  );
}

export default DirectionButtons;
