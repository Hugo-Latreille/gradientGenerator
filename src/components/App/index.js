import NbColors from "src/components/NbColors";
import RandomButtons from "src/components/RandomButtons";
import TextColors from "src/components/TextColors";
import Gradient from "src/components/Gradient";
import DirectionButtons from "src/components/DirectionButtons";

// == Composant
function App() {
  return (
    <div className="app">
      <NbColors />
      <RandomButtons />
      <TextColors />
      <Gradient />
      <DirectionButtons />
    </div>
  );
}

// == Export
export default App;
