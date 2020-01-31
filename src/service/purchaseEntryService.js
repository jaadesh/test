import axios from "axios";
import * as Config from "../config/config";

export const purchaseEntryList = (level) => {
  return axios.get(Config.API_URL + "purchaseentry/list/level"+level);
};

export const purchaseEntryProductList = (id) => {
  return axios.get(Config.API_URL + "purchaseentry/productlist/" + id);
};


export const purchaseEntryAdd = formdata => {

  const formData = new FormData();
  formData.append('catName', formdata.catName);
  formData.append('subcatName', formdata.subcatName);
  formData.append('seriesName', formdata.seriesName);
  formData.append('brandName', formdata.brandName);
  formData.append('degree', formdata.degree);
  formData.append('loadLife', formdata.loadLife);
  formData.append('lowESR', formdata.lowESR);
  formData.append('highRippleCurrent', formdata.highRippleCurrent);
  formData.append('remark', formdata.remark);
  formData.append('device_type', Config.DEVICE_TYPE);
  formData.append('role', Config.USER_ROLE);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  return axios.post(Config.API_URL + 'purchaseEntry/add', formData, config)
};

export const purchaseEntryEditData = (action) => {
  return axios.get(Config.API_URL + 'purchaseentry/purchaseproduct/' + action.entryId + '/' + action.productId)
}

export const purchaseEntryEdit = (inputdata) => {

  inputdata.testReport.forEach((item,key) => {
    // delete item._id;
    // if(item.value === ''){
    //   inputdata.testReport.splice(key,3);
    // }
  });

  return axios.post(Config.API_URL + "purchaseentry/editproductdata", {
  purchaseEntryId: inputdata.purchaseEntryId,
	pId : inputdata.productId,
	weight : inputdata.weight,
	location : inputdata.location,
	purchasePrice : inputdata.purchasePrice,
	rackNo : inputdata.rackNo,
	isFEI: inputdata.isFEI,
	standardPrice: inputdata.standardPrice,
  productDetails : {
    testReport:inputdata.testReport,
    insidePacking:inputdata.insidePacking
  }
  });
}

export const purchaseEntrydelete = (id) => {
  return axios.post(Config.API_URL + 'purchaseEntry/delete',
    {
      id: id,
    })
}

export const purchaseEntryChangeFinalStatus = (id) => {
  return axios.post(Config.API_URL + 'purchaseEntry/changelevel',
    {
      purchaseEntryId: id,
    })
}

export const purchaseEntryPriceFetch = () => {
  return axios.get(Config.API_URL + 'standard-price/list')
}

export const purchaseEntryMasterListFetch = () => {
  return axios.get(Config.API_URL + 'purchaseentry/masterlist')
}