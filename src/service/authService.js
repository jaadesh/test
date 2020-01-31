import axios from 'axios';
import * as Config from '../config/config';


export const UserLogin = (data) => {
  return axios.post(Config.API_URL + 'user/login',
    { email: data.email, password: data.password, device_type: Config.DEVICE_TYPE, role: Config.USER_ROLE })
}

export const UserLogout = (token) => {
  return axios.post(Config.API_URL + 'user/logout',
    {
      token: token,
      device_type: Config.DEVICE_TYPE,
      role: Config.USER_ROLE
    })
}