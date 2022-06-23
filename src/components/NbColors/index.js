import { useSelector } from 'react-redux';

function NbColors() {
  const nbColors = useSelector((state) => state.nbColors);

  return (
    <div id="nbColors">
      {nbColors} couleur(s) générée(s)
    </div>
  );
}

export default NbColors;
