import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PageHeader from "../../component/Layout/PageHeader";
import { updateObject } from "../../shared/utility";
import Layout from "../Layout/Layout";
import ProductForm from '../../component/product/productForm';
import { validateProduct } from '../../validations/product';
import * as productActions from '../../store/actions/productAction';
import * as leadTypeActions from '../../store/actions/leadTypeAction';
import * as sizePitchActions from '../../store/actions/sizePitchAction';
import * as valueActions from '../../store/actions/valueAction';
import * as purchaseEntryAction from '../../store/actions/purchaseEntryAction';
// import { CATEGORY_MASTER } from '../../config/config';
import * as Config from "../../config/config";
const defaultImage = '/assets/images/300.png';
const validExtension = (fileName, exts) => {
  return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
    fileName
    );
  };
  
  class ProductEdit extends Component {
    state = {
      formdata: {
        id:'',
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
        uploadedproductimage : ''
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
    
    componentDidMount() {
      if (this.props.match.params.id) {
        this.props.onFetchEditData(this.props.match.params.id);
        this.props.onGetValue();
        this.props.onGetMasterList();
      } else {
        this.props.histroy.push("./product-list");
      }
    }
    
    componentWillUnmount() {
      this.props.onReset();
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
            } );
            this.setState(newState);
          }
        }
      }
      else{
        this.setState({ formdata: formData });
      }
    }
    
    componentDidUpdate(prevProps, prevState) {
      
      if (prevProps.catName !== this.props.catName && this.props.catName) {
        this.setState({ categorymaster: this.props.catName });
      }
      if (prevProps.subcatId !== this.props.subcatId && this.props.subcatId) {
        this.setState({ subcategorymaster: this.props.subcatId });
      }
      if (prevProps.brandId !== this.props.brandId && this.props.brandId) {
        this.setState({ brandmaster: this.props.brandId });
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
      
      if (prevProps.productData !== this.props.productData && this.props.productData ) {
        const newProductData = this.props.productData;
        if(newProductData.catName){
          this.props.onGetLeadtypeFromCat(newProductData.catName);
          this.props.onGetSizePitchFromCat(newProductData.catName);
        }
        let newDisplayImage = [];
        if(newProductData.images){
          newProductData.images.forEach((eachImg, key) =>{
            newDisplayImage.push(eachImg.path);
          });
        }
        
        const formData = updateObject(this.state.formdata, {
          
          catName: newProductData.catName,
          subcatId: newProductData.subcatId,
          value:newProductData.value,
          nearbyvalue:newProductData.nearbyvalue ? newProductData.nearbyvalue : '',
          // codeId:newProductData.,
          volt:newProductData.volt,
          // unit:newProductData.,
          nearbyvolt:newProductData.nearbyvolt ? newProductData.nearbyvolt :'',
          leadtypeId:newProductData.leadtypeId,
          sizepitchId: newProductData.sizepitchId,
          brandId: newProductData.brandId,
          seriesId:newProductData.seriesId,
          uploadedproductimage:newDisplayImage,
          // productimages:newProductData.,
          id: newProductData._id
        });
        this.setState({ formdata: formData });
      }
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
    
    onFileClickHandler = () => {
      const formData = updateObject(this.state.formdata, { productimages: "" });
      this.setState({ formdata: formData });
    };
    
    onRemoveImageHandler = (pId,path) => {
      if (window.confirm("Are you sure you want to remove this Image?")) {
        if(pId && path){
          this.props.onRemoveImage(pId,path,this.state.formdata);
        }
      }
    }
    
    formSubmitHandler = e => {
      e.preventDefault();
      
      const validationResponse = validateProduct(
        this.state.formdata,
        Config.CATEGORY_MASTER
        );
        this.setState({ errors: validationResponse.error });
        
        if (Object.keys(validationResponse.error).length === 0) {
          this.props.onSubmit(this.state.formdata);
        } else {
          document.getElementsByName(validationResponse.field)[0].focus();
        }
      };
      
      render() {
        let product = (
          <Layout>
          <PageHeader title="Product Edit" />
          <div className="contentpanel">
          <div className="row">
          <form
          encType="multipart/form-data"
          autoComplete="off"
          name="seriesform"
          method="post"
          onSubmit={this.formSubmitHandler}
          >
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
          masterList={this.state.masterList}
          baseProductpath={this.props.baseProductpath}
          RemoveImage={this.onRemoveImageHandler}
          />
          </form>
          </div>
          </div>
          </Layout>
          );
          if (this.props.response) {
            const path = "/product-list/" + encodeURI(this.props.response);
            product = <Redirect to={path} />;
          }
          return product;
        }
      }
      
      const mapDispatchToProps = dispatch => {
        return {
          onFetchEditData: id => dispatch(productActions.productFetchEditStart(id)),
          onSubmit: formdata => dispatch(productActions.productEditStart(formdata)),
          onGetMasterList: () => dispatch(purchaseEntryAction.purchaseEntryMasterListFetchStart()),
          onGetLeadtypeFromCat: (catName) => dispatch(leadTypeActions.leadtypeFetchFromCategoryStart(catName)),
          onGetSizePitchFromCat: (catName) => dispatch(sizePitchActions.sizepitchFetchFromCategoryStart(catName)),
          onGetValue: () => dispatch(valueActions.valueListStart()),
          onRemoveImage: (pId,path,formdata) => dispatch(productActions.productRemoveImageStart(pId,path,formdata)),
          onReset: () => dispatch(productActions.productReset())
        };
      };
      
      const mapStateToProps = state => {
        return {
          error: state.Product.error,
          loading: state.Product.loading,
          response: state.Product.response,
          seriesmaster: state.PurchaseEntry.masterList ? state.PurchaseEntry.masterList.seriesList : null,
          catName: state.PurchaseEntry.masterList ? state.PurchaseEntry.masterList.categories : null,
          subcatId: state.PurchaseEntry.masterList ? state.PurchaseEntry.masterList.subcategories : null,
          brandId: state.PurchaseEntry.masterList ? state.PurchaseEntry.masterList.brandList : null,
          leadtypemaster: state.LeadType.leadTypeList,
          sizepitchmaster: state.SizePitch.sizepitchList,
          valuemaster: state.Value.valueList,
          masterList : state.PurchaseEntry.masterList,
          productData : state.Product.productData,
          baseProductpath: state.Product.baseProductpath,
          imgResponse: state.Product.imgResponse
        };
      };
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
        )(ProductEdit);
        