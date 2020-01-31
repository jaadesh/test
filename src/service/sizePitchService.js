import axios from 'axios';
import * as Config from '../config/config';

export const sizepitchAdd = (formdata) => {
  return axios.post(Config.API_URL + 'sizepitch/add', {
    sp_catname: formdata.sp_catname,
    sp_diameter: formdata.sp_diameter,
    sp_height: formdata.sp_height,
    sp_pitch: formdata.sp_pitch,
    sp_width: formdata.sp_width,
  })
}

export const sizepitchList = () => {
  return axios.get(Config.API_URL + 'sizepitch/list')
}

export const sizepitchFetchEditData = (id) => {
  return axios.get(Config.API_URL + 'sizepitch/' + id);
}

export const sizepitchEdit = (formdata) => {
  return axios.post(Config.API_URL + 'sizepitch/edit', {
    sp_catname: formdata.sp_catname,
    sp_diameter: formdata.sp_diameter,
    sp_height: formdata.sp_height,
    sp_pitch: formdata.sp_pitch,
    sp_width: formdata.sp_width,
    id: formdata.id
  })
}

export const sizepitchDelete = (id) => {
  return axios.get(Config.API_URL + 'sizepitch/delete/' + id)
}

export const sizepitchFetchFromCategory = catname => {
  return axios.post(Config.API_URL + "sizepitch/getSizepitchFromCat", {
    catname: catname
  });
};