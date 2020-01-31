import * as brandConstants from '../constants/brandConstants';


export const addBrandStart = (formdata) => {
  return{
    type:brandConstants.ADD_BRAND_START,
    formdata:formdata
  }
}

export const addBrandSuccess = (response) => {
  return{
    type:brandConstants.ADD_BRAND_SUCCESS,
    response:response
  }
}

export const addBrandFail = (error) => {
  return{
    type:brandConstants.ADD_BRAND_FAIL,
    error:error
  }
}

export const getBrandStart = (response) => {
  return {
    type: brandConstants.GET_BRAND_START,
    response: response,
  }
}

export const getBrandSuccess = (brandList) => {
  return {
    type: brandConstants.GET_BRAND_SUCCESS,
    brandList: brandList,
  }
}

export const getBrandFail = (error) => {
  return {
    type: brandConstants.GET_BRAND_FAIL,
    error: error
  }
}

export const brandFetchEditStart = (id) => {
  return {
    type: brandConstants.BRAND_FETCH_EDIT_START,
    id: id,
  }
}

export const brandFetchEditSuccess = (brandData) => {
  return {
    type: brandConstants.BRAND_FETCH_EDIT_SUCCESS,
    brandData: brandData,
  }
}

export const brandFetchEditFail = (error) => {
  return {
    type: brandConstants.BRAND_FETCH_EDIT_FAIL,
    error: error,
  }
}

export const editBrandStart = (formdata) => {
  return {
    type: brandConstants.BRAND_EDIT_START,
    formdata: formdata,
  }
}

export const editBrandSuccess = (response) => {
  return {
    type: brandConstants.BRAND_EDIT_SUCCESS,
    response: response,
  }
}

export const editBrandFail = (error) => {
  return {
    type: brandConstants.BRAND_EDIT_FAIL,
    error: error,
  }
}

export const deleteBrandStart = (id) => {
  return {
    type: brandConstants.DELETE_BRAND_START,
    id: id,
  }
}

export const deleteBrandSuccess = (response) => {
  return {
    type: brandConstants.DELETE_BRAND_SUCCESS,
    msg: response,
  }
}

export const deleteBrandFail = (error) => {
  return {
    type: brandConstants.DELETE_BRAND_FAIL,
    error: error
  }
}

export const brandReset = () => {
  return {
    type: brandConstants.BRAND_RESET,
  }
}