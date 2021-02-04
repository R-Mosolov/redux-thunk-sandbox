export const getAsyncValue = () => async (dispatch) => {
  dispatch({ type: 'GET_ASYNC_VALUE' });

  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((res) => {
      const newStore = res.id.toString().split('');
      dispatch({ type: 'SET_STATE', payload: newStore });
    });
};