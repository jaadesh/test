import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PageHeader from "../../component/Layout/PageHeader";
import { updateObject } from "../../shared/utility";
import Layout from "../Layout/Layout";
import BrandForm from "../../component/Brand/brandForm";
import { validateBrand } from "../../validations/brand";
import * as brandActions from "../../store/actions/brandAction";

class BrandAdd extends Component {
  state = {
    formdata: {
      brandname: "",
      id: ""
    },
    errors: {}
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id);
    } else {
      this.props.histroy.push("./brand-list");
    }
  }

  onChangeHandler = e => {
    const formData = updateObject(this.state.formdata, {
      [e.target.name]: e.target.value
    });
    this.setState({ formdata: formData });
  };

  formSubmitHandler = e => {
    e.preventDefault();

    const validationResponse = validateBrand(this.state.formdata);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    } else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.brandData !== this.props.brandData && this.props.brandData) {
      const newbrandData = this.props.brandData;
      const formData = updateObject(this.state.formdata, {
        brandname: newbrandData.brandName,
        id: newbrandData.brandId
      });
      this.setState({ formdata: formData });
    }
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  render() {
    let brand = (
      <Layout>
        <PageHeader title="Brand Edit" />
        <div className="contentpanel">
          <div className="row">
            <form
              encType="multipart/form-data"
              autoComplete="off"
              name="brandform"
              method="post"
              onSubmit={this.formSubmitHandler}
            >
              <BrandForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                serverError={this.props.error}
                loading={this.props.loader}
              />
            </form>
          </div>
        </div>
      </Layout>
    );

    if (this.props.response) {
      const path = "/brand-list/" + encodeURI(this.props.response);
      brand = <Redirect to={path} />;
    }

    return brand;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchEditData: id => dispatch(brandActions.brandFetchEditStart(id)),
    onSubmit: formdata => dispatch(brandActions.editBrandStart(formdata)),
    onReset: () => dispatch(brandActions.brandReset())
  };
};

const mapStateToProps = state => {
  return {
    error: state.Brand.error,
    loader: state.Brand.loading,
    response: state.Brand.response,
    brandData: state.Brand.brandData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandAdd);
