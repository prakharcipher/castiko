import axios from 'axios';
import { FETCH_USER, FETCH_CARDS } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const fetchCards = () => async dispatch => {
  const res = await axios.get('/api');

  dispatch({ type: FETCH_CARDS, payload: res.data });
};
