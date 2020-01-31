import axios from "axios";
import * as Config from "../config/config";

export const valueList = () => {
  return axios.get(Config.API_URL + "value/list");
};

export const valueAdd = inputdata => {
  return axios.post(Config.API_URL + "value/add", {
    code: inputdata.code,
    value: inputdata.value,
    unit: inputdata.unit
  });
};

export const valueEditData = (id) => {
  return axios.get(Config.API_URL + 'value/' + id)
}

export const valueEdit = (inputdata) => {
  return axios.post(Config.API_URL + "value/edit", {
    id:inputdata.id,
    code: inputdata.code,
    value: inputdata.value,
    unit: inputdata.unit
  });
}

export const valueDelete = (id) => {
  return axios.post(Config.API_URL + 'value/delete',
    {
      id: id,
    })
}