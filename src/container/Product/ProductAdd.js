import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import ProductForm from '../../component/product/productForm';
import { validateProduct } from '../../validations/product';
import * as productActions from '../../store/actions/productAction';
import * as leadTypeActions from '../../store/actions/leadTypeAction';
import * as sizePitchActions from '../../store/actions/sizePitchAction';
import * as valueActions from '../../store/actions/valueAction';
import * as purchaseEntryAction from '../../store/actions/purchaseEntryAction';
import { CATEGORY_MASTER } from '../../config/config';

const defaultImage = '/assets/images/300.png';
const validExtension = (fileName, exts) => {
  return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}

class ProductAdd extends Component {
  
  state = {
    formdata: {
      productName: '',
      catName: '',
      subcatId: '',
      value:'',
      nearbyvalue:'',
      codeId:'',
      volt:'',
      unit:'',
      nearbyvolt:'',
      leadtypeId:'',
      sizepitchId: '',
      brandId: '',
      seriesId:'',
      productimages:'',
      displayimage: [defaultImage],
      
    },
    errors: {},
    categorymaster:[],
    subcategorymaster:[],
    brandmaster:[],
    seriesmaster:[],
    leadtypemaster:[],
    sizepitchmaster:[],
    valuemaster:[],
    masterList:{}
  }
  
  componentDidMount(){
    this.props.onGetMasterList();
    this.props.onGetValue();
  }
  
  componentWillUnmount() {
    this.props.onReset();
  }
  
  onChangeHandler = (e) => {
    let formData1 = null;
    formData1 = {...formData1,[e.target.name]: e.target.value }
    const formData = updateObject(this.state.formdata,  formData1 );
    
    if(e.target.name === "codeId"){
      this.getValueUnitFromCodeHandler(e.target.value, formData);
    }
    
    if(e.target.name === "seriesId"){
      const masterList = this.state.masterList;
      if(masterList){
        let seriesCatName = null;
        let seriesSubCatName = null;
        let seriesBrandName = null;
        
        let currentSubCatName = null;
        let currentBrandName = null;
        
        let catMasterArr = [];
        let subcatMasterArr = [];
        let brandMasterArr = [];
        
        masterList.seriesList.forEach((eachSeries,key) => {
          if(eachSeries._id === e.target.value){
            seriesCatName = eachSeries.catName
            seriesSubCatName = eachSeries.subcatName
            seriesBrandName = eachSeries.brandName
          }
        })
        
        if(seriesCatName && seriesSubCatName && seriesBrandName){
          
          this.props.onGetLeadtypeFromCat(seriesCatName);
          this.props.onGetSizePitchFromCat(seriesCatName);
          
          masterList.subcategories.forEach((eachSubcat,key) => {
            if(eachSubcat._id === seriesSubCatName){
              currentSubCatName = eachSubcat.subcatname;
            }
          })
          
          masterList.brandList.forEach((eachBrand,key) => {
            if(eachBrand._id === seriesBrandName){
              currentBrandName = eachBrand.brandname;
            }
          })
          catMasterArr.push(seriesCatName);
          subcatMasterArr.push({_id:seriesSubCatName,subcatname:currentSubCatName});
          brandMasterArr.push({_id:seriesBrandName,brandname:currentBrandName});
          
          const newState = updateObject(this.state, {
            formdata : { ...formData, catName:seriesCatName, subcatId:seriesSubCatName, brandId:seriesBrandName},
            categorymaster: catMasterArr,
            subcategorymaster:subcatMasterArr,
            brandmaster:brandMasterArr,
          });
          this.setState(newState);
        }
      }
    }
    else{
      this.setState({ formdata: formData });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.subcategorymaster !== this.props.subcategorymaster && this.props.subcategorymaster) {
      const newState = updateObject(this.state, {
        formdata : { ...this.state.formdata, subcatId:'', seriesId:''},
        subcategorymaster: this.props.subcategorymaster,
        seriesmaster:''
      } );
      this.setState(newState);
    }
    if (prevProps.brandmaster !== this.props.brandmaster && this.props.brandmaster) {
      this.setState({ brandmaster: this.props.brandmaster });
    }
    if (prevProps.seriesmaster !== this.props.seriesmaster && this.props.seriesmaster) {
      this.setState({ seriesmaster: this.props.seriesmaster });
    }
    
    if (prevProps.masterList !== this.props.masterList && this.props.masterList) {
      this.setState({ masterList: this.props.masterList });
    }
    
    if (prevProps.leadtypemaster !== this.props.leadtypemaster && this.props.leadtypemaster) {
      this.setState({ leadtypemaster: this.props.leadtypemaster });
    }
    if (prevProps.sizepitchmaster !== this.props.sizepitchmaster && this.props.sizepitchmaster) {
      this.setState({ sizepitchmaster: this.props.sizepitchmaster });
    }
    if (prevProps.valuemaster !== this.props.valuemaster && this.props.valuemaster) {
      this.setState({ valuemaster: this.props.valuemaster });
    }
  }
  
  getValueUnitFromCodeHandler = (code, newformData) => {
    const codes = this.state.valuemaster;
    const result = codes.find( codeValue => codeValue._id === code );
    if(result === '' || result === undefined){
      newformData.value = '';
      newformData.unit = '';
    }
    else{
      newformData.value = result.value;
      newformData.unit = result.unit;
    }
    
    const formData = updateObject(this.state.formdata, { newformData });
    this.setState({ formdata: formData });
  }
  
  onFileChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      
      
      let breakCondition = false;
      let newDisplayImage = [];
      Object.keys(event.target.files).map(key => {
        if (validExtension(event.target.files[key].name, ['.jpg','.jpeg','.png']) && !breakCondition) {
          this.setState({ errors: {} });
          newDisplayImage.push(URL.createObjectURL(event.target.files[key]));
        }
        else {
          let index =  Number(key) +  Number(1);
          let errors = updateObject(this.state.errors, { productimages: 'Invalid file at index - '+ index +', .jpg,.jpeg,.png files allowed.' });
          this.setState({ errors: errors });
          breakCondition  = true;
        }
        let formData = updateObject(this.state.formdata,{productimages:event.target.files,displayimage : newDisplayImage});
        return this.setState({ formdata: formData });
      })
      
    }
  }
  
  onFileClickHandler = (event) => {
    
    let formData = null;
    
    formData = updateObject(this.state.formdata, { productimages: '' });
    this.setState({ formdata: formData });
    
  }
  
  formSubmitHandler = (e) => {
    e.preventDefault();
    
    const validationResponse = validateProduct(this.state.formdata, CATEGORY_MASTER);
    this.setState({ errors: validationResponse.error });
    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }
  
  render() {
    let product = (
      <Layout>
      <PageHeader title="Product Add" />
      <div className="contentpanel">
      <div className="row">
      <form encType="multipart/form-data" autoComplete="off" name="productform" method="post" onSubmit={this.formSubmitHandler}>
      <ProductForm
      onChange={this.onChangeHandler}
      errors={this.state.errors}
      formdata={this.state.formdata}
      categories={this.state.categorymaster}
      subcategories={this.state.subcategorymaster}
      brands={this.state.brandmaster}
      series={this.state.seriesmaster}
      leadTypes={this.state.leadtypemaster}
      sizepitch={this.state.sizepitchmaster}
      value={this.state.valuemaster}
      serverError={this.props.error}
      loading={this.props.loading}
      onFileChange={this.onFileChangeHandler}
      onFileClick={this.onFileClickHandler}
      />
      </form>
      </div>
      </div>
      </Layout>
      )
      if (this.props.response) {
        const path = "/product-list/" + encodeURI(this.props.response);
        product = <Redirect to={path} />
      }
      return (
        product
        )
      }
    }
    
    const mapDispatchToProps = dispatch => {
      return {
        onSubmit: (formdata) => dispatch(productActions.productAddStart(formdata)),
        onReset: () => dispatch(productActions.productReset()),
        onGetMasterList: () => dispatch(purchaseEntryAction.purchaseEntryMasterListFetchStart()),
        onGetLeadtypeFromCat: (catName) => dispatch(leadTypeActions.leadtypeFetchFromCategoryStart(catName)),
        onGetSizePitchFromCat: (catName) => dispatch(sizePitchActions.sizepitchFetchFromCategoryStart(catName)),
        onGetValue: () => dispatch(valueActions.valueListStart())
      } 
    }
    
    const mapStateToProps = state => {
      return {
        error: state.Product.error,
        loading: state.Product.loading,
        response: state.Product.response,
        seriesmaster: state.PurchaseEntry.masterList ? state.PurchaseEntry.masterList.seriesList : null,
        leadtypemaster: state.LeadType.leadTypeList,
        sizepitchmaster: state.SizePitch.sizepitchList,
        valuemaster: state.Value.valueList,
        masterList : state.PurchaseEntry.masterList
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);