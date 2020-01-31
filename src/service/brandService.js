import axios from "axios";
import * as Config from "../config/config";

export const addBrand = inputdata => {
  return axios.post(Config.API_URL + "brand/add", {
    brandname: inputdata.brandname
  });
};

export const GetBrand = () => {
  return axios.get(Config.API_URL + 'brand/list',
    {
    })
}

export const brandEditData = (id) => {
  return axios.get(Config.API_URL + 'brand/' + id)
}

export const editBrand = (inputdata) => {
  return axios.post(Config.API_URL + "brand/edit", {
    id:inputdata.id,
    brandname: inputdata.brandname
  });
}

export const DeleteBrand = (id) => {
  // return axios.post(Config.API_URL + 'brand/delete',
  //   {
  //     id: id,
  //   })
  return axios.get(Config.API_URL + 'brand/delete/' + id)
}
