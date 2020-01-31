// export const API_URL = process.env.NODE_ENV === 'production' ? "https://api.ecapmart.com/" : "http://192.168.0.23:4000/";
// export const SERVER_BASE = process.env.NODE_ENV === 'production' ? "https://ecapmart.com/" : "http://192.168.0.23:4000/";
export const API_URL = process.env.NODE_ENV === 'production' ? "https://api.ecapmart.com/" : "http://localhost:4000/";
export const SERVER_BASE = process.env.NODE_ENV === 'production' ? "https://ecapmart.com/" : "http://localhost:4000/";
export const DEVICE_TYPE = 'web';
export const USER_ROLE = 'admin';
export const CATCH_ERROR = 'Some error occured while processing your request, Please try again!';
export const STORAGE_NAME = process.env.NODE_ENV === 'production' ? 'ecmlin' : 'ecmlon';
export const STORAGE_TOKEN = process.env.NODE_ENV === 'production' ? 'ecmlit' : 'ecmlot';
export const CATEGORY_MASTER = [
  'Electrolytic Capacitors',
  'Polyester Capacitors',
  'Ceramic Capacitors'
];
export const LOCATION_MASTER = [
  'Lamington',
  'Bhiwandi'
]