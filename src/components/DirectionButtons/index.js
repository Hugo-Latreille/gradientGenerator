import { useDispatch } from "react-redux";
import { changeDirection } from "../../store/actions";

function DirectionButtons() {
  const dispatch = useDispatch();

  return (
    <div className="buttons group">
      {[45, 90, 135, 225, 270, 315].map((angle) => (
        <button
          key={angle}
          type="button"
          className="button"
          id={`to${angle}`}
          onClick={() => dispatch(changeDirection(angle))}
        >
          to {angle}
        </button>
      ))}
      {/* <button
        type="button"
        className="button"
        id="to45"
        onClick={() => dispatch(changeDirection("45"))}
      >
        to 45
      </button>
      <button
        type="button"
        className="button"
        id="to90"
        onClick={() => dispatch(changeDirection("90"))}
      >
        to 90
      </button>
      <button
        type="button"
        className="button"
        id="to135"
        onClick={() => dispatch(changeDirection("135"))}
      >
        to 135
      </button>
      <button
        type="button"
        className="button"
        id="to225"
        onClick={() => dispatch(changeDirection("225"))}
      >
        to 225
      </button>
      <button
        type="button"
        className="button"
        id="to270"
        onClick={() => dispatch(changeDirection("270"))}
      >
        to 270
      </button>
      <button
        type="button"
        className="button"
        id="to315"
        onClick={() => dispatch(changeDirection("315"))}
      >
        to 315
      </button> */}
    </div>
  );
}

export default DirectionButtons;
