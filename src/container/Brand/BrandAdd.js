import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import BrandForm from '../../component/Brand/brandForm';
import { validateBrand } from '../../validations/brand';
import * as brandActions from '../../store/actions/brandAction' ;


class BrandAdd extends Component {

  state = {
    formdata: {
      brandname: ''
    },
    errors: {}
  }

  componentWillUnmount() {
     this.props.onReset();
  }

  onChangeHandler = (e) => {
    const formData = updateObject(this.state.formdata, { [e.target.name]: e.target.value });
    this.setState({ formdata: formData });
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const validationResponse = validateBrand(this.state.formdata);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  render() {

    let brand = (
      <Layout>
        <PageHeader title="Brand Add" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="brandform" method="post" onSubmit={this.formSubmitHandler}>
              <BrandForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                serverError={this.props.error}
                loading={this.props.loading}
              />
            </form>
          </div>
        </div>
      </Layout>
    )

    if (this.props.response) {
      const path = "/brand-list/" + encodeURI(this.props.response);
      brand = <Redirect to={path} />
    }

    return (
      brand
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(brandActions.addBrandStart(formdata)),
    onReset: () => dispatch(brandActions.brandReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.Brand.error,
    loader: state.Brand.loading,
    response: state.Brand.response
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandAdd);