import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import LeadTypeForm from '../../component/leadType/leadTypeForm';
import { validateLeadType } from '../../validations/leadType';
import * as leadTypeAction from '../../store/actions/leadTypeAction';
import { CATEGORY_MASTER } from '../../config/config';


class LeadTypeAdd extends Component {

  state = {
    formdata: {
      catname: '',
      leadtypename: '',
    },
    errors: {},
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

    const validationResponse = validateLeadType(this.state.formdata, CATEGORY_MASTER);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  render() {

    let leadtype = (
      <Layout>
        <PageHeader title="Lead Type Add" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="subcategoryfrom" method="post" onSubmit={this.formSubmitHandler}>
              <LeadTypeForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                serverError={this.props.error}
                categories={CATEGORY_MASTER}
                loading={this.props.loading}
              />
            </form>
          </div>
        </div>
      </Layout>
    )

    if (this.props.response) {
      const path = "/lead-type-list/" + encodeURI(this.props.response);
      leadtype = <Redirect to={path} />
    }

    return (
      leadtype
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(leadTypeAction.leadtypeAddStart(formdata)),
    onReset: () => dispatch(leadTypeAction.leadtypeReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.LeadType.error,
    loading: state.LeadType.loading,
    response: state.LeadType.response,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadTypeAdd);