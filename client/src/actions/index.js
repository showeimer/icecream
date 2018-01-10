import axios from 'axios';
import { FETCH_TRUCKS } from './types';

export const fetchTrucks = () => async dispatch => {
  const res = await axios.get('/api/trucks');
  console.log(res.data);
  dispatch({ type: FETCH_TRUCKS, payload: res.data });
}
