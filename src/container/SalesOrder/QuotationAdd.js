import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import QuotationForm from '../../component/sales/quotationForm';
import { validateQuotation, validateSearch } from '../../validations/quotation';
import * as seriesActions from '../../store/actions/seriesAction';
import * as brandActions from '../../store/actions/brandAction';
import * as sizePitchActions from '../../store/actions/sizePitchAction';
import * as leadTypeActions from '../../store/actions/leadTypeAction';
import * as quotationActions from '../../store/actions/quotationAction';
import { CATEGORY_MASTER } from '../../config/config';

class QuotationAdd extends Component {

  state = {
    formdata: {
      userId: '',
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      value: "",
      volt: "",
      brand: "",
      loadLife: "",
      lowESR: "",
      highRippleCurrent: "",
      sizePitch: "",
      leadType: "",
      isFEI: ""
    },
    availableProducts: [],
    insideProductData: [],
    selectedProducts: [],
    brandmaster: '',
    sizePitchMaster: '',
    leadTypeMaster: '',
    errors: {},
    isOpen: false,
    modalTitle: 'Available Package Sizes',
    popupBody: null,
    total: {
      totalRequiredQuantity: '',
      totalPackageQuantity: '',
      totalAmount: '',
      totalSum: '',
    }
  };

  componentDidMount() {
    this.props.onGetBrand();
    this.props.onGetsizePitch();
    this.props.onGetLeadType();
  }

  componentWillUnmount() {
    // this.props.onReset();
  }

  onChangeHandler = (e, type) => {
    let error = [];
    let newTotal = '';
    let formData1 = this.state.formdata;
    if (e.target.name === "mobile") {
      if (e.target.value.length === 10) {
        if (!isNaN(e.target.value)) {
          error.mobile = "";
          this.props.onGetUserDetailsFromMobile(e.target.value)
        }
        else {
          error.mobile = "Please Enter a Valid Mobile No.";
        }
      }
      else {
        formData1 = { ...formData1, fname: '', lname: '', email: '', userId: '' };
      }
    }
    if (type === 'requiredQuantity') {
      let id = e.target.name.substr(17);
      this.state.availableProducts.filter(obj => {
        if (obj.productId === id) {
          obj.requiredQuantity = e.target.value
        }
        return 0;
      });
    }
    else if (type === 'packageQuantity') {
      let id = e.target.name.substr(16);
      this.state.availableProducts.filter(obj => {
        if (obj.productId === id) {
          obj.packageQuantity = e.target.value
        }
        return 0;
      });
    }
    else if (type === 'selectedRequiredQuantity') {
      let id = e.target.name.substr(25);
      this.state.selectedProducts.filter(obj => {
        if (obj.selectedProductId === id) {
          obj.selectedRequiredQuantity = e.target.value
          newTotal = this.onPackageQuantityChangeHandler(id);
        }
        return 0;
      });
    }
    else if (type === 'selectedPackageQuantity') {
      let id = e.target.name.substr(24);
      this.state.selectedProducts.filter(obj => {
        if (obj.selectedProductId === id) {
          obj.selectedPackageQuantity = e.target.value
          newTotal = this.onPackageQuantityChangeHandler(id);
        }
        return 0;
      });
    }
    else if (type === 'selectedAmount') {
      let id = e.target.name.substr(15);
      this.state.selectedProducts.filter(obj => {
        if (obj.selectedProductId === id) {
          obj.selectedAmount = e.target.value
          newTotal = this.onPackageQuantityChangeHandler(id);
        }
        return 0;
      });
    }
    formData1 = { ...formData1, [e.target.name]: e.target.value }
    const newState = updateObject(this.state, {
      formdata: formData1,
      errors: error,
      total: newTotal
    });
    this.setState(newState);
  }

  onChangeSelectHandler = (e, type) => {
    let error = [];
    const newState = updateObject(this.state, {
      formdata: { ...this.state.formdata, [type]: e.value },
      errors: error
    });
    this.setState(newState);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.brandmaster !== this.props.brandmaster && this.props.brandmaster) {
      let blankBrand = {}
      if (this.props.brandmaster.length !== 0) {
        blankBrand.brandname = 'Choose Brand';
        blankBrand._id = '';
        this.props.brandmaster.unshift(blankBrand);
      }
      return this.setState({ brandmaster: this.props.brandmaster });
    }
    if (prevProps.sizePitchMaster !== this.props.sizePitchMaster && this.props.sizePitchMaster) {
      let blankSizePitch = {}
      if (this.props.sizePitchMaster.length !== 0) {
        blankSizePitch.spdiameter = 'Choose Size Pitch';
        blankSizePitch.spheight = '';
        blankSizePitch.sppitch = '';
        blankSizePitch.spwidth = '';
        blankSizePitch.spcatname = '';
        blankSizePitch._id = '';
        this.props.sizePitchMaster.unshift(blankSizePitch);
      }
      return this.setState({ sizePitchMaster: this.props.sizePitchMaster });
    }
    if (prevProps.leadTypeMaster !== this.props.leadTypeMaster && this.props.leadTypeMaster) {
      let blankLead = {}
      if (this.props.leadTypeMaster.length !== 0) {
        blankLead.ltname = 'Choose Lead Type';
        blankLead._id = '';
        blankLead.catname = '';
        this.props.leadTypeMaster.unshift(blankLead);
      }
      return this.setState({ leadTypeMaster: this.props.leadTypeMaster });
    }
    if (prevProps.availableProducts !== this.props.availableProducts && this.props.availableProducts) {
      let prodData = '';
      if (this.props.availableProducts.length > 0) {
        const newProductData = this.props.availableProducts;
        let newAvailableProducts = [];
        newProductData.forEach(productVal => {
          let productData = {};
          productData.productId = productVal._id
          productData.productName = productVal.productName
          productData.requiredQuantity = ''
          productData.packageQuantity = ''
          productData.amount = ''
          newAvailableProducts.push(productData);
        });
        prodData = updateObject(this.state,
          {
            availableProducts: newAvailableProducts
          });
        this.setState(prodData);
      }
      else {
        prodData = updateObject(this.state,
          {
            availableProducts: []
          });
        this.setState(prodData);
      }
    }
    if (prevProps.userData !== this.props.userData && this.props.userData) {
      const newuserData = this.props.userData;
      const formData = updateObject(this.state.formdata, {
        fname: newuserData.name.fname,
        lname: newuserData.name.lname,
        email: newuserData.email,
        userId: newuserData._id
      });
      this.setState({ formdata: formData });
    }
    if (prevProps.insideProductData !== this.props.insideProductData && this.props.insideProductData) {
      let newSelectedProducts = [...this.state.selectedProducts];
      newSelectedProducts.filter(obj => {
        if (this.props.insideProductData[0]) {
          if (obj.selectedProductId === this.props.insideProductData[0].pId) {
            this.props.insideProductData[0].price.forEach((eachPrice, key) => {
              if (!obj.selectedPackageQuantity || obj.selectedPackageQuantity.trim() === '' || isNaN(obj.selectedPackageQuantity)) {
                obj.selectedAmount = '';
                obj.selectedSum = '';
              }
              else if (parseInt(eachPrice.start) <= parseInt(obj.selectedPackageQuantity) && parseInt(eachPrice.end) >= parseInt(obj.selectedPackageQuantity)) {
                obj.selectedAmount = eachPrice.price
                obj.selectedSum = eachPrice.price * obj.selectedPackageQuantity
              }
            });
          }
        }
        // return this.setState({ selectedProducts: newSelectedProducts });
      });
      return this.setState({ selectedProducts: newSelectedProducts, insideProductData: this.props.insideProductData });
    }
  }

  onPackageQuantityChangeHandler = (proId) => {
    let newSelectedProducts = [...this.state.selectedProducts];
    let newTotal = {};
    let totalRequiredQuantity = 0;
    let totalPackageQuantity = 0;
    let totalAmount = 0;
    let totalSum = 0;
    newSelectedProducts.filter(obj => {
      if (obj.selectedProductId === proId) {
        obj.selectedSum = obj.selectedAmount && obj.selectedPackageQuantity ? obj.selectedAmount * obj.selectedPackageQuantity : '';
      }
      totalRequiredQuantity = obj.selectedRequiredQuantity ? totalRequiredQuantity + parseFloat(obj.selectedRequiredQuantity) : '';
      totalPackageQuantity = obj.selectedPackageQuantity ? totalPackageQuantity + parseFloat(obj.selectedPackageQuantity) : '';
      totalAmount = obj.selectedAmount ? totalAmount + parseFloat(obj.selectedAmount) : '';
      totalSum = obj.selectedSum ? totalSum + parseFloat(obj.selectedSum) : '';
    });
    newTotal.totalRequiredQuantity = totalRequiredQuantity;
    newTotal.totalPackageQuantity = totalPackageQuantity;
    newTotal.totalAmount = totalAmount;
    newTotal.totalSum = totalSum;
    return newTotal;
  }

  onSearchProductHandler = () => {
    const searchValidationResponse = validateSearch(this.state.formdata, CATEGORY_MASTER);
    this.setState({ errors: searchValidationResponse.error });

    if (Object.keys(searchValidationResponse.error).length === 0) {
      this.props.onSearchProduct(this.state.formdata);
    }
    else {
      document.getElementsByName(searchValidationResponse.field)[0].focus();
    }
  }

  onShowPackingHandler = (id) => {
    this.props.onGetInsidePacking(id);
    this.setState({ isOpen: true });
  }

  onAddProductHandler = (id) => {
    this.props.onGetInsidePacking(id);
    const response = {
      field: '',
      position: {},
      error: {}
    };
    const list = this.state.selectedProducts;
    let totalRequiredQuantity = 0;
    let totalPackageQuantity = 0;
    let totalAmount = 0;
    let totalSum = 0;
    this.state.availableProducts.filter(obj => {
      if (obj.productId === id) {
        let productList = {};
        if (obj.requiredQuantity !== '' && !isNaN(obj.requiredQuantity)) {
          if (obj.packageQuantity !== '' && !isNaN(obj.packageQuantity)) {
            if (list.some(el => el.selectedProductId === id)) {
              return;
            }
            productList.selectedProductId = obj.productId
            productList.selectedProductName = obj.productName
            productList.selectedRequiredQuantity = obj.requiredQuantity
            productList.selectedPackageQuantity = obj.packageQuantity
            productList.selectedAmount = ''
            // const productList = this.state.availableProducts.find(el => el.productId === id);
            const newP = [...list, productList];
            totalRequiredQuantity = obj.selectedRequiredQuantity ? totalRequiredQuantity + parseFloat(obj.selectedRequiredQuantity) : '';
            totalPackageQuantity = obj.selectedPackageQuantity ? totalPackageQuantity + parseFloat(obj.selectedPackageQuantity) : '';
            totalAmount = obj.selectedAmount ? totalAmount + parseFloat(obj.selectedAmount) : '';
            totalSum = obj.selectedSum ? totalSum + parseFloat(obj.selectedSum) : '';
            
            this.setState({ selectedProducts: newP, total:{...this.state.total,totalRequiredQuantity:totalRequiredQuantity,totalPackageQuantity:totalPackageQuantity,totalAmount:totalAmount,totalSum:totalSum} });
          }
          else {
            let packageQuantity = "packageQuantity-" + id;
            response.field = packageQuantity;
            response.error["packageQuantity-" + id] = 'Please enter numeric data';
            this.setState({ errors: response.error });
            document.getElementsByName(response.field)[0].focus();
          }
        }
        else {
          let requiredQuantity = "requiredQuantity-" + id;
          response.field = requiredQuantity;
          response.error["requiredQuantity-" + id] = 'Please enter numeric data';
          this.setState({ errors: response.error });
          document.getElementsByName(response.field)[0].focus();
        }
      }
      return 0;
    });
  }

  onRemoveProductHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Series?")) {
      var newSelectedProducts = [...this.state.selectedProducts];
      let filteredArray = newSelectedProducts.filter(item => item.selectedProductId !== id);
      this.setState({ selectedProducts: filteredArray });
    }
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const validationResponse = validateQuotation(this.state.formdata, this.state.selectedProducts);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      // this.state.formdata.selectedProducts = this.state.selectedProducts
      // this.props.onSubmit(this.state.formdata);
      this.props.history.push('/sales-order-list/Sales Order Added Successfully.')
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    let series = (
      <Layout>
        <PageHeader title="Sales Order Add" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="seriesform" method="post" onSubmit={this.formSubmitHandler}>
              <QuotationForm
                onChange={this.onChangeHandler}
                onChangeSelect={this.onChangeSelectHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                serverError={this.props.error}
                loading={this.props.loading}
                addProduct={this.onAddProductHandler}
                removeProduct={this.onRemoveProductHandler}
                showPacking={this.onShowPackingHandler}
                searchProduct={this.onSearchProductHandler}
                brandmaster={this.state.brandmaster}
                sizePitchMaster={this.state.sizePitchMaster}
                leadTypeMaster={this.state.leadTypeMaster}
                availableProducts={this.state.availableProducts}
                insideProductData={this.state.insideProductData}
                isOpen={this.state.isOpen}
                closeModal={this.closeModal}
                modalTitle={this.state.modalTitle}
                popupBody={this.state.popupBody}
                selectedProducts={this.state.selectedProducts}
                total={this.state.total}
              />
            </form>
          </div>
        </div>
      </Layout>
    )
    if (this.props.response) {
      const path = "/quotation-list/" + encodeURI(this.props.response);
      series = <Redirect to={path} />
    }
    return (
      series
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(quotationActions.quotationAddStart(formdata)),
    onReset: () => dispatch(quotationActions.quotationReset()),
    onGetBrand: () => dispatch(brandActions.getBrandStart()),
    onGetsizePitch: () => dispatch(sizePitchActions.sizepitchListStart()),
    onGetLeadType: () => dispatch(leadTypeActions.leadtypeListStart()),
    onGetUserDetailsFromMobile: (mobile) => dispatch(quotationActions.getUserDetailsFromMobileStart(mobile)),
    onSearchProduct: (formdata) => dispatch(quotationActions.searchProductStart(formdata)),
    onGetInsidePacking: (id) => dispatch(quotationActions.getInsidePackingStart(id))
  }
}

const mapStateToProps = state => {
  return {
    error: state.Quotation.error,
    loading: state.Quotation.loading,
    response: state.Quotation.response,
    sizePitchMaster: state.SizePitch.sizepitchList,
    brandmaster: state.Brand.brandData,
    leadTypeMaster: state.LeadType.leadTypeList,
    userData: state.Quotation.userData,
    availableProducts: state.Quotation.availableProducts ? state.Quotation.availableProducts : [],
    insideProductData: state.Quotation.insideProductData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotationAdd);