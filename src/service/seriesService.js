import axios from "axios";
import * as Config from "../config/config";

export const seriesList = () => {
  return axios.get(Config.API_URL + "series/list");
};

export const getSubcatFromCat = catname => {
  return axios.get(Config.API_URL + "subcat/get-subcat-from-cat/" + catname);
};

export const addSeries = formdata => {

  const formData = new FormData();
  formData.append('catName', formdata.catName);
  formData.append('subCatId', formdata.subCatId);
  formData.append('seriesName', formdata.seriesName);
  formData.append('brandId', formdata.brandId);
  formData.append('degree', formdata.degree);
  formData.append('loadLife', formdata.loadLife);
  formData.append('lowESR', formdata.lowESR);
  formData.append('highRippleCurrent', formdata.highRippleCurrent);
  formData.append('pdfDataSheet', formdata.pdfDataSheet);
  formData.append('remark', formdata.remark);
  formData.append('device_type', Config.DEVICE_TYPE);
  formData.append('role', Config.USER_ROLE);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return axios.post(Config.API_URL + 'series/add', formData, config)
};

export const seriesEditData = (id) => {
  return axios.get(Config.API_URL + 'series/' + id)
}

export const seriesEdit = (formdata) => {
  const formData = new FormData();
  formData.append('catName', formdata.catName);
  formData.append('subCatId', formdata.subCatId);
  formData.append('seriesName', formdata.seriesName);
  formData.append('brandId', formdata.brandId);
  formData.append('degree', formdata.degree);
  formData.append('loadLife', formdata.loadLife);
  formData.append('lowESR', formdata.lowESR);
  formData.append('highRippleCurrent', formdata.highRippleCurrent);
  formData.append('pdfDataSheet', formdata.pdfDataSheet);
  formData.append('remark', formdata.remark);
  formData.append('seriesId', formdata.id);
  formData.append('device_type', Config.DEVICE_TYPE);
  formData.append('role', Config.USER_ROLE);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return axios.post(Config.API_URL + 'series/edit', formData, config)
}

export const deleteSeries = (id) => {
  return axios.get(Config.API_URL + 'series/delete/' + id)
}

export const seriesFetchFromCategory = (catname, subcatId) => {
  return axios.post(Config.API_URL + "series/getSeriesFromCat", {
    catname: catname,
    subcatId: subcatId
  });
};