/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
/* eslint-disable default-param-last */
/* eslint-disable no-else-return */
// == Imports
import store from 'src/store';
import { changeColor, changeDirection } from 'src/store/actions';
import { randomHexColor, generateSpanColor } from './utils';
// == State

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// store.subscribe permet de s'abonner aux changements de notre état
// en d'autres termes, je passerai dans le subscribe juste apres le reducer
store.subscribe(() => {
  console.log('mise a jour / subscribe');
  // je vais utiliser ce subscribe pour redessiner mon application,
  // a chaque changement des données
  renderNbColors();
  renderGradient();
  renderColors();
});

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    console.log('Random all colors');
    // data
    store.dispatch(changeColor(randomHexColor(), 'firstColor'));
    store.dispatch(changeColor(randomHexColor(), 'lastColor'));

    // note : si on avait voulu flex
    // [
    //   changeColor(randomHexColor(), 'firstColor'),
    //   changeColor(randomHexColor(), 'lastColor')
    // ].forEach((action) => store.dispatch(action));
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch(changeColor(randomHexColor(), 'firstColor'));
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch(changeColor(randomHexColor(), 'lastColor'));
  });

// pour ne pas me frapper tous mes écouteurs a la main,
// je fais un petit tableau et je boucle dessus pour créer mes écouteurs d'evenement
[45, 90, 135, 225, 270, 315].forEach((angle) => {
  document.getElementById(`to${angle}`)
    .addEventListener('click', () => {
      store.dispatch(changeDirection(angle));
    });
});
