import axios from "axios";
import * as Config from "../config/config";

export const userList = () => {
  return axios.get(Config.API_URL + "user/list");
};

export const addUser = formdata => {
  return axios.post(Config.API_URL + "user/add", {
    fname: formdata.fname,
    lname: formdata.lname,
    email: formdata.email,
    mobile: formdata.mobile,
    designation: formdata.designation,
    companyName: formdata.companyName,
    GSTNo: formdata.GSTNo,
    manufactureProduct: formdata.manufactureProduct,
    reference: formdata.reference,
    details: formdata.details,
    phone: formdata.phone,
    password: formdata.password,
    confirmPassword: formdata.confirmPassword,
    role: formdata.role,
    typeOfCompany: formdata.typeOfCompany,
    addressLine1: formdata.addressLine1,
    addressLine2: formdata.addressLine2,
    landmark: formdata.landmark,
    country: formdata.country,
    state: formdata.state,
    city: formdata.city,
    pincode: formdata.pincode,
    id: formdata.id,
    checkChangePassword: formdata.checkChangePassword
  });
};

export const userEditData = id => {
  return axios.get(Config.API_URL + "user/" + id);
};

export const userEdit = formdata => {
  return axios.post(Config.API_URL + "user/edit", {
    id: formdata.id,
    fname: formdata.fname,
    lname: formdata.lname,
    email: formdata.email,
    mobile: formdata.mobile,
    designation: formdata.designation,
    companyName: formdata.companyName,
    GSTNo: formdata.GSTNo,
    manufactureProduct: formdata.manufactureProduct,
    reference: formdata.reference,
    details: formdata.details,
    phone: formdata.phone,
    password: formdata.password,
    confirmPassword: formdata.confirmPassword,
    role: formdata.role,
    typeOfCompany: formdata.typeOfCompany,
    addressLine1: formdata.addressLine1,
    addressLine2: formdata.addressLine2,
    landmark: formdata.landmark,
    country: formdata.country,
    state: formdata.state,
    city: formdata.city,
    pincode: formdata.pincode,
    checkChangePassword: formdata.checkChangePassword
  });
};

export const deleteUser = id => {
  return axios.post(Config.API_URL + "user/delete", {
    id: id
  });
};

export const getCountry = () => {
  return axios.get(Config.API_URL + "user/getCountry");
};

export const getState = id => {
  return axios.post(Config.API_URL + "user/getState", {
    id: id
  });
};
