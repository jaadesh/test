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

class SizePitchEdit extends Component {

  state = {
    formdata: {
      id: null,
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

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id)
    }
    else {
      this.props.histroy.push('./size-pitch-list');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.SizePitchData !== this.props.SizePitchData && this.props.SizePitchData) {
      const newSizePitchData = this.props.SizePitchData;
      const formData = updateObject(this.state.formdata, {
        sp_catname: newSizePitchData.catName,
        sp_diameter: newSizePitchData.spDiameter,
        sp_pitch: newSizePitchData.spPitch,
        sp_width: newSizePitchData.spWidth,
        sp_height: newSizePitchData.spHeight,
        id: newSizePitchData.sizepitchId,
      });
      this.setState({ formdata: formData });
      newSizePitchData.catName === 'Electrolytic Capacitors' || newSizePitchData.catName === '' ? show_width = false : show_width = true;
    }
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
        <PageHeader title="Size Pitch Edit" />
        <div className="contentpanel">
          <div className="row">
            <form autoComplete="off" name="subcategoryfrom" method="post" onSubmit={this.formSubmitHandler}>
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
    onFetchEditData: (id) => dispatch(sizePitchAction.sizepitchFetchEditDataStart(id)),
    onSubmit: (formdata) => dispatch(sizePitchAction.sizepitchEditStart(formdata)),
    onReset: () => dispatch(sizePitchAction.sizepitchReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.SizePitch.sizepitcherror,
    loading: state.SizePitch.sizepitchloading,
    response: state.SizePitch.sizepitchresponse,
    SizePitchData: state.SizePitch.sizepitchData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizePitchEdit);