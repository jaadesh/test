import axios from "axios";
import * as Config from "../config/config";

export const productList = () => {
  return axios.get(Config.API_URL + "product/list");
};


export const productAdd = formdata => {
  const formData = new FormData();
  formData.append('catname', formdata.catName);
  formData.append('subcat', formdata.subcatId);
  formData.append('valuecode', formdata.codeId);
  formData.append('volt', formdata.volt);
  formData.append('nearbyvalue', formdata.nearbyvalue);
  formData.append('nearbyvolt', formdata.nearbyvolt);
  formData.append('leadtype', formdata.leadtypeId);
  formData.append('sizepitch', formdata.sizepitchId);
  formData.append('brand', formdata.brandId);
  formData.append('series', formdata.seriesId);
  for (const file of formdata.productimages) {
    formData.append('productimages', file)
  }
  formData.append('device_type', Config.DEVICE_TYPE);
  formData.append('role', Config.USER_ROLE);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return axios.post(Config.API_URL + 'product/add', formData, config)
};


export const productEditData = (id) => {
  return axios.get(Config.API_URL + 'product/' + id)
}

export const productEdit = (formdata) => {
  const formData = new FormData();
  formData.append('catname', formdata.catName);
  formData.append('subcat', formdata.subcatId);
  formData.append('valuecode', formdata.codeId);
  formData.append('volt', formdata.volt);
  formData.append('nearbyvalue', formdata.nearbyvalue);
  formData.append('nearbyvolt', formdata.nearbyvolt);
  formData.append('leadtype', formdata.leadtypeId);
  formData.append('sizepitch', formdata.sizepitchId);
  formData.append('brand', formdata.brandId);
  formData.append('series', formdata.seriesId);
  formData.append('pId', formdata.id);
  for (const file of formdata.productimages) {
    formData.append('productimages', file)
  }
  formData.append('device_type', Config.DEVICE_TYPE);
  formData.append('role', Config.USER_ROLE);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return axios.post(Config.API_URL + 'product/edit', formData, config)
}

export const productRemoveImage = (formdata) => {
  return axios.post(Config.API_URL + 'product/remove-product-image',
    {
      pId:formdata.pId,
      image:formdata.path
    })
}

export const productdelete = (id) => {
  return axios.get(Config.API_URL + 'product/delete/' + id)
}