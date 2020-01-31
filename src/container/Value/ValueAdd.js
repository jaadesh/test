import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import ValueForm from '../../component/Value/valueForm';
import { validateValue } from '../../validations/value';
import * as valueActions from '../../store/actions/valueAction' ;


class ValueAdd extends Component {

  state = {
    formdata: {
      code: '',
      value: '',
      unit: '',
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

    const validationResponse = validateValue(this.state.formdata);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
       this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  render() {

    let value = (
      <Layout>
        <PageHeader title="Value Add" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="valueform" method="post" onSubmit={this.formSubmitHandler}>
              <ValueForm
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
      const path = "/value-list/" + encodeURI(this.props.response);
      value = <Redirect to={path} />
    }

    return (
      value
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(valueActions.valueAddStart(formdata)),
    onReset: () => dispatch(valueActions.valueReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.Value.error,
    loader: state.Value.loading,
    response: state.Value.response
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValueAdd);