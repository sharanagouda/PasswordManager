import {
  fetchProductsPending,
  fetchProductsError,
  fetchProductsSuccess,
} from '../actionTypes';

export function fetchProducts(dispatch) {
  console.log('sdjfhsd');
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('https://api.openbrewerydb.org/breweries')
      .then(res => res.json())
      .then(res => {
        console.log('sd ', res);
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export function fetchProducts3() {
  return async dispatch => {
    try {
      const users = await fetch(`https://api.openbrewerydb.org/breweries`, {
        method: 'GET',
      });
      const data = await users.json();
      dispatch(fetchProductsSuccess(data));
    } catch (err) {
      dispatch(fetchProductsError(error));
    }
  };
}
