import { useDispatch } from "react-redux";
import { changeColor } from "../../store/actions";
import { randomHexColor } from "../../utils";

function RandomButtons() {
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={() => dispatch(changeColor(randomHexColor(), "firstColor"))}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={() => {
          dispatch(changeColor(randomHexColor(), "firstColor"));
          dispatch(changeColor(randomHexColor(), "lastColor"));
        }}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={() => dispatch(changeColor(randomHexColor(), "lastColor"))}
      >
        Random Last
      </button>
    </div>
  );
}

export default RandomButtons;
