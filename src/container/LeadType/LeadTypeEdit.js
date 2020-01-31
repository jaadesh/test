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


class LeadTypeEdit extends Component {

  state = {
    formdata: {
      catname: '',
      leadtypename: '',
      id: null,
    },
    errors: {},
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id)
    }
    else {
      this.props.histroy.push('./sub-category-list');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.leadTypeData !== this.props.leadTypeData && this.props.leadTypeData) {
      const newleadTypeData = this.props.leadTypeData;
      const formData = updateObject(this.state.formdata, {
        catname: newleadTypeData.catName,
        leadtypename: newleadTypeData.leadtypeName,
        id: newleadTypeData.leadtypeId,
      });
      this.setState({ formdata: formData });
    }
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
        <PageHeader title="Lead Type Edit" />
        <div className="contentpanel">
          <div className="row">
            <form autoComplete="off" name="subcategoryfrom" method="post" onSubmit={this.formSubmitHandler}>
              <LeadTypeForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                categories={CATEGORY_MASTER}
                serverError={this.props.error}
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
    onFetchEditData: (id) => dispatch(leadTypeAction.leadtypeFetchEditDataStart(id)),
    onSubmit: (formdata) => dispatch(leadTypeAction.leadtypeEditStart(formdata)),
    onReset: () => dispatch(leadTypeAction.leadtypeReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.LeadType.error,
    loading: state.LeadType.loading,
    response: state.LeadType.response,
    leadTypeData: state.LeadType.leadTypeData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadTypeEdit);