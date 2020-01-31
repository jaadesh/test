import axios from 'axios';
import * as Config from '../config/config';

export const leadtypeAdd = (formdata) => {
  return axios.post(Config.API_URL + 'leadtype/add', {
    catname: formdata.catname,
    leadtypename: formdata.leadtypename,
  })
}

export const leadtypeList = () => {
  return axios.get(Config.API_URL + 'leadtype/list')
}

export const leadtypeFetchEditData = (id) => {
  return axios.get(Config.API_URL + 'leadtype/' + id);
}

export const leadtypeEdit = (formdata) => {
  return axios.post(Config.API_URL + 'leadtype/edit', {
    catname: formdata.catname,
    leadtypename: formdata.leadtypename,
    id: formdata.id
  })
}

export const leadtypeDelete = (id) => {
  return axios.get(Config.API_URL + 'leadtype/delete/' + id)
}

export const leadtypeFetchFromCategory = catname => {
  return axios.post(Config.API_URL + "leadtype/getLeadtypeFromCat", {
    catname: catname
  });
};