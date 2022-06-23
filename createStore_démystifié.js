
const myCreateStore = (reducerFunction) => {
  // je commence par appeller mon reducer "a blanc" sans parametre
  // pour obtenir mon état initial
  let state = reducerFunction();

  // un tableau qui contiendra tous mes callbacks
  const callbacks = [];

  // renvoyer un objet qui contient mes 3 méthodes
  return {
    // getstate : renvoie le state (no shit)
    getState: () => {
      return state;
    },
    dispatch: (action) => {
      // j'apelle le reducer, avec le state actuel, et l'action
      // j'écrase le state avec le résultat pour modifier mes données
      state = reducerFunction(state, action);

      // ici je vais déclencher tous mes abonnés
      callbacks.forEach((callback) => callback());
    },
    subscribe: (callback) => {
      // ici, il faudrait stocker le callback
      // en sachant qu'on peut appeler plusieurs fois subscribe
      // donc par extension il peut y avoir plusieurs callbacks

      // je stocke mon callback dans le tableau
      callbacks.push(callback);
    },
  };
};
