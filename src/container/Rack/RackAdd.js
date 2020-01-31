import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import RackForm from '../../component/Rack/rackForm';
import { validateRack } from '../../validations/rack';
import * as rackActions from '../../store/actions/rackAction' ;


class RackAdd extends Component {

  state = {
    formdata: {
      location:'',
      rack:''
    },
    errors: {},
    locationMaster: [
      'Lamington',
      'Bhiwandi'
    ],
    rackContainer:[]
  }

  componentWillUnmount() {
     this.props.onReset();
  }

  onChangeHandler = (e) => {
    const formData = updateObject(this.state.formdata, { [e.target.name]: e.target.value });
    this.setState({ formdata: formData });
  }

  onAddMoreHandler = (e) => {
    let error = [];
    const validationResponse = validateRack(this.state.formdata);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      const rackContainerNew = this.state.rackContainer;
      if (rackContainerNew.indexOf(this.state.formdata.rack) > -1){
        error.rack = "Rack already exists.";
        this.setState({ errors:error});
      }
      else{
        rackContainerNew.push(this.state.formdata.rack);
        error.rack = "";
        this.setState({ rackContainer: rackContainerNew, errors:error });
      }
      
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  onRackRemoveHandler = (i) => {
    if (window.confirm("Are you sure you want to delete this Record?")) {
      const rackContainerNew = this.state.rackContainer;
      rackContainerNew.splice(i, 1);
      this.setState({ rackContainer: rackContainerNew });
    }
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const validationResponse = validateRack(this.state.formdata);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
       this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  render() {

    let rack = (
      <Layout>
        <PageHeader title="Rack Add" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="rackform" method="post" onSubmit={this.formSubmitHandler}>
              <RackForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                locations={this.state.locationMaster}
                formdata={this.state.formdata}
                rackContainer={this.state.rackContainer}
                serverError={this.props.error}
                loading={this.props.loading}
                onAddMore ={this.onAddMoreHandler}
                rackRemove ={this.onRackRemoveHandler}
              />
            </form>
          </div>
        </div>
      </Layout>
    )

    if (this.props.response) {
      const path = "/rack-list/" + encodeURI(this.props.response);
      rack = <Redirect to={path} />
    }

    return (
      rack
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(rackActions.rackAddStart(formdata)),
    onReset: () => dispatch(rackActions.rackReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.Rack.error,
    loader: state.Rack.loading,
    response: state.Rack.response
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RackAdd);