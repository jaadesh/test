import axios from 'axios';
import * as Config from '../config/config';


export const FetchMenu = () => {
  return axios.get(Config.API_URL + 'general/menu')
}
