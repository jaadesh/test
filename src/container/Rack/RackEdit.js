import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PageHeader from "../../component/Layout/PageHeader";
import { updateObject } from "../../shared/utility";
import Layout from "../Layout/Layout";
import RackForm from "../../component/Rack/rackForm";
import { validateRack } from "../../validations/rack";
import * as rackActions from "../../store/actions/rackAction";

class RackAdd extends Component {

  state = {
    formdata: {
      id: '',
      location: '',
      rack: '',
      rackId: '',
      isUsed: '',
      locationId:'',
      rackContainer: []
    },
    errors: {},
    locationMaster: [
      { locationId: 1, locationName: "Lamington" },
      { locationId: 2, locationName: "Bhiwandi" }
    ]
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id);
    } else {
      this.props.histroy.push("./rack-list");
    }
  }

  onChangeHandler = e => {
    const formData = updateObject(this.state.formdata, {
      [e.target.name]: e.target.value
    });
    this.setState({ formdata: formData });
  };


  onAddMoreHandler = (e) => {
    let error = [];
    const validationResponse = validateRack(this.state.formdata, 1);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      const rackContainerNew = this.state.formdata.rackContainer;
      const found = rackContainerNew.some(el => el.rackName.toUpperCase() === this.state.formdata.rack.toUpperCase());

      if (found) {
        error.rack = "Rack already exists.";
        this.setState({ errors: error });
      }
      else {
        rackContainerNew.push({ rackId: this.state.formdata.rackId, rackName: this.state.formdata.rack, locationId: this.state.formdata.locationId , isUsed: this.state.formdata.isUsed });
        error.rack = "";
        const newState = updateObject(this.state, {
          formdata: { ...this.state.formdata, rackId: '', isUsed: '', rack: '', locationId: '', rackContainer: rackContainerNew },
          errors: error
        });
        this.setState(newState);
      }
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  onRackRemoveHandler = (i, isUsed) => {
    if (window.confirm("Are you sure you want to delete this Record?")) {
      if (isUsed !== 1) {
        const rackContainerNew = this.state.formdata.rackContainer;
        rackContainerNew.splice(i, 1);
        const formData = updateObject(this.state.formdata, { rackContainer: rackContainerNew });
        this.setState({ formdata: formData });
      }
      else {
        alert("This rack is already in used. You can not edit or delete it.");
      }
    }
  }

  onRackEditHandler = (val, i, isUsed) => {
    if (window.confirm("Are you sure you want to edit this Record?")) {

      if (isUsed !== 1) {
        if (this.state.formdata.rack === '') {
          const rackContainerNew = this.state.formdata.rackContainer;
          const removedElement = rackContainerNew.splice(i, 1);
          const rackId = removedElement[0].rackId;
          const isUsed = removedElement[0].isUsed;
          const locationId = removedElement[0].locationId;
          const formData = updateObject(this.state.formdata, { rackContainer: rackContainerNew, rack: val, rackId: rackId, isUsed: isUsed, locationId:locationId });
          this.setState({ formdata: formData });
          document.getElementsByName("rack")[0].focus();
        }
        else {
          if (window.confirm("Another entry is under process. Do you want to proceed?")) {
            const rackContainerNew = this.state.formdata.rackContainer;
            const removedElement = rackContainerNew.splice(i, 1);
            const rackId = removedElement[0].rackId;
            const isUsed = removedElement[0].isUsed;
            const formData = updateObject(this.state.formdata, { rackContainer: rackContainerNew, rack: val, rackId: rackId, isUsed: isUsed });
            this.setState({ formdata: formData });
            document.getElementsByName("rack")[0].focus();
          }
        }
      }
      else {
        alert("This rack is already in used. You can not edit or delete it.");
      }

    }
  }

  formSubmitHandler = e => {
    e.preventDefault();

    const validationResponse = validateRack(this.state.formdata, 2);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    } else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rackData !== this.props.rackData && this.props.rackData) {
      const newrackData = this.props.rackData;
      const formData = updateObject(this.state.formdata, {
        id: newrackData[0].locationId,
        location: newrackData[0].locationId,
        rackContainer: newrackData[0].Racks
      });
      this.setState({ formdata: formData });
    }
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  render() {
    let rack = (
      <Layout>
        <PageHeader title="Rack Edit" />
        <div className="contentpanel">
          <div className="row">
            <form
              encType="multipart/form-data"
              autoComplete="off"
              name="rackform"
              method="post"
              onSubmit={this.formSubmitHandler}
            >
              <RackForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                locations={this.state.locationMaster}
                formdata={this.state.formdata}
                rackContainer={this.state.formdata.rackContainer}
                serverError={this.props.error}
                loading={this.props.loading}
                onAddMore={this.onAddMoreHandler}
                rackRemove={this.onRackRemoveHandler}
                rackEdit={this.onRackEditHandler}
              />
            </form>
          </div>
        </div>
      </Layout>
    );

    if (this.props.response) {
      const path = "/rack-list/" + encodeURI(this.props.response);
      rack = <Redirect to={path} />;
    }

    return rack;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchEditData: id => dispatch(rackActions.rackFetchEditStart(id)),
    onSubmit: formdata => dispatch(rackActions.rackEditStart(formdata)),
    onReset: () => dispatch(rackActions.rackReset())
  };
};

const mapStateToProps = state => {
  return {
    error: state.Rack.error,
    loader: state.Rack.loading,
    response: state.Rack.response,
    rackData: state.Rack.rackData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RackAdd);
