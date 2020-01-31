import { combineReducers } from 'redux';

import loginReducer from './authReducer';
import menuReducer from './menuReducer';
import subCatReducer from './subCatReducer';
import leadtypeReducer from './leadtypeReducer';
import sizePitchReducer from './sizePitchReducer';
import brandReducer from './brandReducer';
import seriesReducer from './seriesReducer';
import valueReducer from './valueReducer';
import rackReducer from './rackReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
import purchaseEntryReducer from './purchaseEntryReducer';
import quotationReducer from './quotationReducer';

export default combineReducers({
  Auth: loginReducer,
  Menu: menuReducer,
  SubCat: subCatReducer,
  LeadType: leadtypeReducer,
  SizePitch: sizePitchReducer,
  Brand: brandReducer,
  Series: seriesReducer,
  Value: valueReducer,
  Rack: rackReducer,
  User: userReducer,
  Product: productReducer,
  PurchaseEntry: purchaseEntryReducer,
  Quotation: quotationReducer
});