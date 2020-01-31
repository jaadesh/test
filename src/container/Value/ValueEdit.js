import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PageHeader from "../../component/Layout/PageHeader";
import { updateObject } from "../../shared/utility";
import Layout from "../Layout/Layout";
import ValueForm from "../../component/Value/valueForm";
import { validateValue } from "../../validations/value";
import * as valueActions from "../../store/actions/valueAction";

class ValueAdd extends Component {
  state = {
    formdata: {
      code: '',
      value: '',
      unit: '',
      id: ''
    },
    errors: {}
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id);
    } else {
      this.props.histroy.push("./value-list");
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

    const validationResponse = validateValue(this.state.formdata);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    } else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.valueData !== this.props.valueData && this.props.valueData) {
      const newvalueData = this.props.valueData;
      const formData = updateObject(this.state.formdata, {
        code: newvalueData.code,
        value: newvalueData.value,
        unit: newvalueData.unit,
        id: newvalueData.valueId
      });
      this.setState({ formdata: formData });
    }
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  render() {
    let value = (
      <Layout>
        <PageHeader title="Value Edit" />
        <div className="contentpanel">
          <div className="row">
            <form
              encType="multipart/form-data"
              autoComplete="off"
              name="valueform"
              method="post"
              onSubmit={this.formSubmitHandler}
            >
              <ValueForm
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
      const path = "/value-list/" + encodeURI(this.props.response);
      value = <Redirect to={path} />;
    }

    return value;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchEditData: id => dispatch(valueActions.valueFetchEditStart(id)),
    onSubmit: formdata => dispatch(valueActions.valueEditStart(formdata)),
    onReset: () => dispatch(valueActions.valueReset())
  };
};

const mapStateToProps = state => {
  return {
    error: state.Value.error,
    loader: state.Value.loading,
    response: state.Value.response,
    valueData: state.Value.valueData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValueAdd);
