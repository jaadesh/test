import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { MDBDataTable } from "mdbreact";

import PageHeader from "../../component/Layout/PageHeader";
import Layout from "../../container/Layout/Layout";
import * as rackActions from "../../store/actions/rackAction";

const list = [
  {
    srno: 'Fetching Records. Please wait... ',
    location: " ",
    rack: " ",
    actions: " "
  }
];

const noList = [
  {
    srno: "No data available.",
    location: " ",
    rack: " ",
    actions: " "
  }
];

class Rack extends Component {
  componentDidMount() {
    this.props.onGetRack();
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  state = {
    list
  };

  deleteRack = id => {
    if (window.confirm("Are you sure you want to delete this Record?")) {
      this.props.onDeleteRack(id);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.rackData !== this.props.rackData && this.props.rackData) {
      if (this.props.rackData.length) {
        const dataSet = this.props.rackData.map((listData, key) => {
          let rackArr = [];
          listData.Racks.map((rackData, rkey) => {
            return rackArr.push(rackData.name);
          })
          rackArr = rackArr.join(",");
          return {
            srno: key + 1,
            location: listData.location,
            rack: listData.Racks.length,
            actions: (
              <div>
                <NavLink className="anchor" to={'/rack-edit/' + listData.locationId} size="sm" > Edit </NavLink>
                {/* <MDBBtn
              onClick={() => this.deleteRack(listData._id)}
              color="purple"
              size="sm"
              >
              Delete
              </MDBBtn> */}
              </div>
            )
          };
        });
        this.setState({ list: dataSet });
      } else {
        this.setState({ list: noList });
      }
    }
  }

  render() {
    const data = {
      columns: [
        {
          label: "Sr. No.",
          field: "srno",
          sort: "asc",
          width: 150
        },
        {
          label: "Location",
          field: "location",
          sort: "asc",
          width: 150
        },
        {
          label: "Total Racks",
          field: "rack",
          sort: "asc",
          width: 150
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
          width: 150
        }
      ],
      rows: this.state.list
    };
    return (
      <Layout>
        <PageHeader title="Rack" />
        <div className="contentpanel">
          <div className="row">
            {this.props.response ? (
              <div className="alert alert-success">
                <strong>{this.props.response}</strong>
              </div>
            ) : this.props.match.params.msg && !this.props.error ? (
              <div className="alert alert-success">
                <strong>{this.props.match.params.msg}</strong>
              </div>
            ) : null}
            {this.props.error ? (
              <div className="alert alert-danger">
                <strong>{this.props.error}</strong>
              </div>
            ) : null}
            {/* <NavLink to="/rack-add" className="btn btn-primary">
              Add Rack
              </NavLink> */}
            {/* Datatable start */}
            <div className="row">
              <MDBDataTable
                striped
                bordered
                hover
                data={data}
              />
            </div>
            {/* Datatable end */}
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    rackData: state.Rack.rackList,
    response: state.Rack.response,
    error: state.Rack.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetRack: () => dispatch(rackActions.rackListStart()),
    onDeleteRack: id => dispatch(rackActions.rackDeleteStart(id)),
    onReset: () => dispatch(rackActions.rackReset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rack);
