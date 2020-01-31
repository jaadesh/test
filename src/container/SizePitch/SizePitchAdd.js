import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import SizePitchForm from '../../component/sizePitch/sizePitchForm';
import { validateSizePitch } from '../../validations/SizePitch';
import * as sizePitchAction from '../../store/actions/sizePitchAction';

let show_width = false;

class SizePitchAdd extends Component {

  state = {
    formdata: {
      sp_catname: '',
      sp_diameter: '',
      sp_height: '',
      sp_pitch: '',
      sp_width: '',
    },
    errors: {},
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  widthToggleHandler = (catname) => {
    catname !== '' ? catname === 'Electrolytic Capacitors' ? show_width = false : show_width = true : show_width = false;
  }

  onChangeHandler = (e) => {
    const formData = updateObject(this.state.formdata, { [e.target.name]: e.target.value });
    this.setState({ formdata: formData });
    if (e.target.name === 'sp_catname') this.widthToggleHandler(e.target.value);
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const validationResponse = validateSizePitch(this.state.formdata, show_width);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  render() {

    let sizepitch = (
      <Layout>
        <PageHeader title="Size Pitch Add" />
        <div className="contentpanel">
          <div className="row">
            <form autoComplete="off" method="post" onSubmit={this.formSubmitHandler}>
              <SizePitchForm
                showWidth={show_width}
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
      const path = "/size-pitch-list/" + encodeURI(this.props.response);
      sizepitch = <Redirect to={path} />
    }

    return (
      sizepitch
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(sizePitchAction.sizepitchAddStart(formdata)),
    onReset: () => dispatch(sizePitchAction.sizepitchReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.SizePitch.sizepitcherror,
    loading: state.SizePitch.sizepitchloading,
    response: state.SizePitch.sizepitchresponse,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizePitchAdd);