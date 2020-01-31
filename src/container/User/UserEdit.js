import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PageHeader from "../../component/Layout/PageHeader";
import { updateObject } from "../../shared/utility";
import Layout from "../Layout/Layout";
import UserForm from "../../component/user/userForm";
import { validateUser } from "../../validations/user";
import * as userActions from "../../store/actions/userAction";

class UserAdd extends Component {
  state = {
    formdata: {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      designation: "",
      companyName: "",
      GSTNo: "",
      manufactureProduct: "",
      reference: "",
      details: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: "",
      typeOfCompany: "",
      addressLine1: "",
      addressLine2: "",
      landmark: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      id: "",
      checkChangePassword: false
    },
    role: {'user':"User", 'mobileEmployee':"Mobile Employee"},
    typeOfCompany: ["Trader", "Retailer", "Dealer", "Manufacture", "Supplier"],
    country: [],
    state: [],
    errors: {}
  };

  componentWillUnmount() {
    this.props.onReset();
  }

  componentDidMount() {
    this.props.onGetCountry();
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id);
    } else {
      this.props.histroy.push("./user-list");
    }
  }

  onToggle = e =>{
    if (e.target.name === "checkChangePassword") {
      this.setState(prevState => ({
        formdata: {
            ...prevState.formdata,
            checkChangePassword: !prevState.formdata.checkChangePassword
        }
    }))
    }
  }

  onChangeHandler = e => {
    if (e.target.name === "country") {
      this.props.onGetState(e.target.value);
    }
    
    const formData = updateObject(this.state.formdata, {
      [e.target.name]: e.target.value
    });
    this.setState({ formdata: formData });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stateList !== this.props.stateList && this.props.stateList) {
      return this.setState({ state: this.props.stateList });
    }
    if (
      prevProps.countryList !== this.props.countryList &&
      this.props.countryList
    ) {
      return this.setState({ country: this.props.countryList });
    }
    

    if (
      prevProps.userData !== this.props.userData &&
      this.props.userData
    ) {
      const newUserData = this.props.userData;
      if(newUserData.address){
        if(newUserData.address[0].country){
          this.props.onGetState(newUserData.address[0].country)
        }
      }
      
      const formData = updateObject(this.state.formdata, {
        fname: newUserData.fname ? newUserData.fname : '',
        lname: newUserData.lname ? newUserData.lname : '',
        email: newUserData.email ? newUserData.email : '',
        mobile: newUserData.mobile ? newUserData.mobile : '',
        designation: newUserData.designation ? newUserData.designation : '',
        companyName: newUserData.companyName ? newUserData.companyName : '',
        GSTNo: newUserData.gstNo ? newUserData.gstNo : '',
        manufactureProduct: newUserData.manufactureProduct ? newUserData.manufactureProduct : '',
        reference: newUserData.reference ? newUserData.reference : '',
        details: newUserData.details ? newUserData.details : '',
        phone: newUserData.phone ? newUserData.phone : '',
        password: '',
        confirmPassword: '',
        role: newUserData.roleId ? newUserData.roleId : '',
        typeOfCompany: newUserData.typeOfCompany ? newUserData.typeOfCompany : '',
        addressLine1: newUserData.addressLine1 ? newUserData.addressLine1 : '',
        addressLine2: newUserData.addressLine2 ? newUserData.addressLine2 : '',
        landmark: newUserData.landmark ? newUserData.landmark : '',
        country: newUserData.country ? newUserData.country : '',
        state: newUserData.state ? newUserData.state : '',
        city: newUserData.city ? newUserData.city : '',
        pincode: newUserData.pincode ? newUserData.pincode : '',
        id: newUserData.userId ? newUserData.userId : ''
      });
      this.setState({ formdata: formData });
    }

  }

  formSubmitHandler = e => {
    e.preventDefault();

    const validationResponse = validateUser(
      this.state.formdata,
      this.state.role,
      this.state.typeOfCompany,
      this.state.country,
      this.state.state
    );
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    } else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  };

  render() {
    let user = (
      <Layout>
        <PageHeader title="User Edit" />
        <div className="contentpanel">
          <div className="row">
            <form
              encType="multipart/form-data"
              autoComplete="off"
              name="userform"
              method="post"
              onSubmit={this.formSubmitHandler}
            >
              <UserForm
                onChange={this.onChangeHandler}
                onToggle={this.onToggle}
                errors={this.state.errors}
                formdata={this.state.formdata}
                typeOfCompany={this.state.typeOfCompany}
                role={this.state.role}
                country={this.state.country}
                state={this.state.state}
                serverError={this.props.error}
                loading={this.props.loading}
              />
            </form>
          </div>
        </div>
      </Layout>
    );

    if (this.props.response) {
      const path = "/user-list/" + encodeURI(this.props.response);
      user = <Redirect to={path} />;
    }

    return user;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetCountry: () => dispatch(userActions.getCountryStart()),
    onGetState: countryId => dispatch(userActions.getStateStart(countryId)),
    onFetchEditData: id => dispatch(userActions.userFetchEditStart(id)),
    onSubmit: formdata => dispatch(userActions.userEditStart(formdata)),
    onReset: () => dispatch(userActions.userReset())
  };
};

const mapStateToProps = state => {
  return {
    error: state.User.error,
    loader: state.User.loading,
    response: state.User.response,
    countryList: state.User.countryList,
    stateList: state.User.stateList,
    userData: state.User.userData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAdd);
