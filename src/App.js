import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// just comment
import Login from './container/Login/Login';
import Dashboard from './container/Dashboard/Dashboard';
import SubCategory from './container/SubCategory/SubCategoryAdd';
import SubCategoryList from './container/SubCategory/SubCategoryList';
import SubCategoryEdit from './container/SubCategory/SubCategoryEdit';
import LeadTypeList from './container/LeadType/LeadTypeList';
import LeadTypeAdd from './container/LeadType/LeadTypeAdd';
import LeadTypeEdit from './container/LeadType/LeadTypeEdit';
import SizePitchList from './container/SizePitch/SizePitchList';
import SizePitchAdd from './container/SizePitch/SizePitchAdd';
import SizePitchEdit from './container/SizePitch/SizePitchEdit';
import BrandList from './container/Brand/BrandList';
import BrandAdd from './container/Brand/BrandAdd';
import BrandEdit from './container/Brand/BrandEdit';
import SeriesList from './container/Series/SeriesList';
import SeriesAdd from './container/Series/SeriesAdd';
import SeriesEdit from './container/Series/SeriesEdit';
import ValueList from './container/Value/ValueList';
import ValueAdd from './container/Value/ValueAdd';
import ValueEdit from './container/Value/ValueEdit';
import RackList from './container/Rack/RackList';
import RackAdd from './container/Rack/RackAdd';
import RackEdit from './container/Rack/RackEdit';
import ProductList from './container/Product/ProductList';
import ProductAdd from './container/Product/ProductAdd';
import ProductEdit from './container/Product/ProductEdit';
import PurchaseEntryListLevel1 from './container/PurchaseEntry/PurchaseEntryListLevel1';
import PurchaseEntryListLevel2 from './container/PurchaseEntry/PurchaseEntryListLevel2';
import PurchaseEntryProductList from './container/PurchaseEntry/PurchaseEntryProductList';
import PurchaseEntryEdit from './container/PurchaseEntry/PurchaseEntryEdit';
import UserList from './container/User/UserList';
import UserAdd from './container/User/UserAdd';
import UserEdit from './container/User/UserEdit';
// import QuotationList from './container/Sales/QuotationList';
// import QuotationAdd from './container/Sales/QuotationAdd';
// import QuotationEdit from './container/Sales/QuotationEdit';
import GuestRoute from './Routes/GuestRoute';
import UserRoute from './Routes/UserRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={RouteComponent}></Route>
      </BrowserRouter>
    );
  }
}

const RouteComponent = () => {
  return (
    <Switch>
      <GuestRoute exact path="/login" component={Login} />
      <UserRoute exact path="/dashboard" component={Dashboard} />
      <UserRoute path="/sub-category-list/:msg?" component={SubCategoryList} />
      <UserRoute path="/sub-category-add" component={SubCategory} />
      <UserRoute path="/sub-category-edit/:id" component={SubCategoryEdit} />
      <UserRoute path="/lead-type-list/:msg?" component={LeadTypeList} />
      <UserRoute path="/lead-type-add" component={LeadTypeAdd} />
      <UserRoute path="/lead-type-edit/:id" component={LeadTypeEdit} />
      <UserRoute path="/size-pitch-list/:msg?" component={SizePitchList} />
      <UserRoute path="/size-pitch-add" component={SizePitchAdd} />
      <UserRoute path="/size-pitch-edit/:id" component={SizePitchEdit} />
      <UserRoute path="/brand-list/:msg?" component={BrandList} />
      <UserRoute path="/brand-add" component={BrandAdd} />
      <UserRoute path="/brand-edit/:id" component={BrandEdit} />
      <UserRoute path="/series-list/:msg?" component={SeriesList} />
      <UserRoute path="/series-add" component={SeriesAdd} />
      <UserRoute path="/series-edit/:id" component={SeriesEdit} />
      <UserRoute path="/value-list/:msg?" component={ValueList} />
      <UserRoute path="/value-add" component={ValueAdd} />
      <UserRoute path="/value-edit/:id" component={ValueEdit} />
      <UserRoute path="/rack-list/:msg?" component={RackList} />
      <UserRoute path="/rack-add" component={RackAdd} />
      <UserRoute path="/rack-edit/:id" component={RackEdit} />
      <UserRoute path="/user-list/:msg?" component={UserList} />
      <UserRoute path="/user-add" component={UserAdd} />
      <UserRoute path="/user-edit/:id" component={UserEdit} />
      <UserRoute path="/product-list/:msg?" component={ProductList} />
      <UserRoute path="/product-add" component={ProductAdd} />
      <UserRoute path="/product-edit/:id" component={ProductEdit} />
      <UserRoute path="/purchase-list-level1/:msg?" component={PurchaseEntryListLevel1} />
      <UserRoute path="/purchase-list-level2/:msg?" component={PurchaseEntryListLevel2} />
      <UserRoute path="/purchase-entry-edit/:entryId/:productId" component={PurchaseEntryEdit} />
      <UserRoute path="/purchase-entry-product-list/:id/:msg?" component={PurchaseEntryProductList} />
      {/* <UserRoute path="/quotation-list" component={QuotationList} />
      <UserRoute path="/quotation-add" component={QuotationAdd} />
      <UserRoute path="/quotation-edit" component={QuotationEdit} /> */}
      <GuestRoute path="/*" component={Login} />
    </Switch>)
}

export default App;
