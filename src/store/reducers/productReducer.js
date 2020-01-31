import * as productConstants from '../constants/productConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  productList: null,
  productData: null,
  subcategorymaster: null,
  baseProductpath: null,
  imgResponse: null
}

const productListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    productList: null,
  })
}

const productListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    productList: action.productList,
  })
}

const productListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    productList: null,
  })
}

const productAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const productAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.subcatmaster
  })
}

const productAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const productFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const productFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    productData: action.productData.productData,
    baseProductpath: action.productData.baseProductpath
  })
}

const productFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    productData: null,
  })
}

const productEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const productEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const productEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const productDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const productDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const productDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const productRemoveImageStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const productRemoveImageSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    imgResponse: action.response
  })
}

const productRemoveImageFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const productImageRefreshStart = (state, action) => {
  var imgArray = [...state.productData.images];
  var productData = state.productData;
  var formdata = action.formdata;
  imgArray = imgArray.filter(function(obj) {
    return obj.path !== action.path;
  });
  return updateObject(state, {
    productData : { ...productData, 
      images:imgArray, 
      brandId:formdata.brandId,
      catName:formdata.catName,
      leadtypeId:formdata.leadtypeId, 
      nearbyvalue:formdata.nearbyvalue,
      nearbyvolt:formdata.nearbyvolt,
      seriesId:formdata.seriesId,
      sizepitchId:formdata.sizepitchId,
      subcatId:formdata.subcatId,
      value:formdata.value,
      volt:formdata.volt,
    }
    });
    
  }
  
  
  
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case productConstants.PRODUCT_LIST_START: return productListStart(state, action);
      case productConstants.PRODUCT_LIST_SUCCESS: return productListSuccess(state, action);
      case productConstants.PRODUCT_LIST_FAIL: return productListFail(state, action);
      
      case productConstants.PRODUCT_ADD_START: return productAddStart(state, action);
      case productConstants.PRODUCT_ADD_SUCCESS: return productAddSuccess(state, action);
      case productConstants.PRODUCT_ADD_FAIL: return productAddFail(state, action);
      
      case productConstants.PRODUCT_FETCH_EDIT_START: return productFetchEditStart(state, action);
      case productConstants.PRODUCT_FETCH_EDIT_SUCCESS: return productFetchEditSuccess(state, action);
      case productConstants.PRODUCT_FETCH_EDIT_FAIL: return productFetchEditFail(state, action);
      
      case productConstants.PRODUCT_EDIT_START: return productEditStart(state, action);
      case productConstants.PRODUCT_EDIT_SUCCESS: return productEditSuccess(state, action);
      case productConstants.PRODUCT_EDIT_FAIL: return productEditFail(state, action);
      
      case productConstants.PRODUCT_DELETE_START: return productDeleteStart(state, action);
      case productConstants.PRODUCT_DELETE_SUCCESS: return productDeleteSuccess(state, action);
      case productConstants.PRODUCT_DELETE_FAIL: return productDeleteFail(state, action);
      
      case productConstants.PRODUCT_REMOVE_IMAGE_START: return productRemoveImageStart(state, action);
      case productConstants.PRODUCT_REMOVE_IMAGE_SUCCESS: return productRemoveImageSuccess(state, action);
      case productConstants.PRODUCT_REMOVE_IMAGE_FAIL: return productRemoveImageFail(state, action);
      
      case productConstants.PRODUCT_IMAGE_REFRESH_START: return productImageRefreshStart(state, action);
      
      case productConstants.PRODUCT_RESET: return initialState;
      
      default: return state;
    }
  }
  
  export default productReducer;