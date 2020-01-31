import axios from "axios";
import * as Config from "../config/config";

export const rackList = () => {
  return axios.get(Config.API_URL + "rack/list");
};

export const rackAdd = inputdata => {
  return axios.post(Config.API_URL + "rack/add", {
    code: inputdata.code,
    rack: inputdata.rack,
    unit: inputdata.unit
  });
};

export const rackEditData = (id) => {
  return axios.get(Config.API_URL + 'rack/' + id)
}

export const rackEdit = (inputdata) => {
  return axios.post(Config.API_URL + "rack/add", {
    id:inputdata.id,
    locationid: inputdata.location,
    racks: inputdata.rackContainer
  });
}

export const rackDelete = (id) => {
  return axios.post(Config.API_URL + 'rack/delete',
    {
      id: id,
    })
}