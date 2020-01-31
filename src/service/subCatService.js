import axios from 'axios';
import * as Config from '../config/config';


export const addSubCat = (formdata) => {
  const formData = new FormData();
  formData.append('catname', formdata.catname);
  formData.append('subcatname', formdata.subcatname);
  formData.append('displayimage', formdata.displayimage);
  formData.append('subcatimage', formdata.subcatimage);
  formData.append('device_type', Config.DEVICE_TYPE);
  formData.append('role', Config.USER_ROLE);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return axios.post(Config.API_URL + 'subcat/add', formData, config)
}


export const subcatList = () => {
  return axios.get(Config.API_URL + 'subcat/list')
}

export const subCatEditData = (id) => {
  return axios.get(Config.API_URL + 'subcat/' + id)
}

export const editSubCat = (formdata) => {
  const formData = new FormData();
  formData.append('id', formdata.id);
  formData.append('catname', formdata.catname);
  formData.append('subcatname', formdata.subcatname);
  formData.append('subcatimage', formdata.subcatimage);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return axios.post(Config.API_URL + 'subcat/edit', formData, config)
}


export const subCatDeleteData = (id) => {
  return axios.get(Config.API_URL + 'subcat/delete/' + id)
}