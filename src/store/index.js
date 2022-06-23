/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable default-param-last */
/* eslint-disable no-else-return */
import { createStore } from 'redux';

import {
  CHANGE_COLOR,
  CHANGE_DIRECTION,
} from './actions';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  // le reducer est notre secrétaire, il regarde le type de l'action
  // pour comprendre quel ordre lui a été donné
  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.angle,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        // je change la couleur de gauche
        [action.position]: action.color,
        // j'augmente mon nbr de couleurs
        nbColors: state.nbColors + 1,
      };
    // je connais pas cet ordre, je renvoie mon state inchangé
    // note : ne surtout pas oublier le default, sinon a la première action inconnue
    // on renvoie undefiend et donc... on perd tout notre state 😱
    default:
      return state;
  }
};

// createStore prend en parametre le reducer
// et renvoie une instance du store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// j'exporte mon store
export default store;
