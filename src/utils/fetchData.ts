import axios from 'axios';
import { IProduct } from '../components/Product';

export const fetchData = async () => {
  return await axios.get<IProduct[]>(process.env.REACT_APP_FETCH_URL!);
};
