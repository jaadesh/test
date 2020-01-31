// import axios from "axios";
// import * as Config from "../config/config";

// export const quotationList = () => {
//   return axios.get(Config.API_URL + "quotation/list");
// };

// export const quotationAdd = inputdata => {
//   return axios.post(Config.API_URL + "quotation/add", {
//     code: inputdata.code,
//     quotation: inputdata.quotation,
//     unit: inputdata.unit
//   });
// };

// export const quotationEditData = (id) => {
//   return axios.get(Config.API_URL + 'quotation/' + id)
// }

// export const quotationEdit = (inputdata) => {
//   return axios.post(Config.API_URL + "quotation/edit", {
//     id: inputdata.id,
//     location: inputdata.location,
//     quotations: inputdata.quotationContainer
//   });
// }

// export const quotationDelete = (id) => {
//   return axios.post(Config.API_URL + 'quotation/delete',
//     {
//       id: id,
//     })
// }

// export const quotationUserDetailsFromMobile = (mobile) => {
//   return axios.get(Config.API_URL + 'user/fetchUser/' + mobile)
// }

// export const quotationSearchProduct = (data) => {
//   Object.keys(data).map((eachVal, key) => {
//     if (data[eachVal] === '') {
//       delete data[eachVal];
//     }
//     else {
//       encodeURIComponent(data[eachVal]);
//     }
//   })
//   // return axios.get(Config.API_URL + 'quotation/searchProduct?value=' + encodeURIComponent(data.value) + '&volt=' + encodeURIComponent(data.volt) + '&brand=' + encodeURIComponent(data.brand) + '&loadLife=' + encodeURIComponent(data.loadLife) + '&lowESR=' + encodeURIComponent(data.lowESR) + '&highRippleCurrent=' + encodeURIComponent(data.highRippleCurrent) + '&sizePitch=' + encodeURIComponent(data.sizePitch) + '&leadType=' + encodeURIComponent(data.leadType) + '&isFEI=' + encodeURIComponent(data.isFEI))
//   return axios.get(Config.API_URL + 'product/quotation-product-search', {
//     params:data
//   });
// }

// export const quotationInsidePacking = (id) => {
//   return axios.get(Config.API_URL + 'purchaseentry/product-purchaseentry-details?id=' + id)
// }