import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { MDBBtn, MDBDataTable } from "mdbreact";

import PageHeader from "../../component/Layout/PageHeader";
import Layout from "../../container/Layout/Layout";
import * as valueActions from "../../store/actions/valueAction";

const list = [
  {
    srno:"Fetching Records. Please wait... ",
    code: " ",
    value : " ",
    unit: " ",
    actions: " "
  }
];

const noList = [
  {
    srno: "No data available.",
    code: " ",
    value : " ",
    unit: " ",
    actions: " "
  }
];

class Value extends Component {
  componentDidMount() {
    this.props.onGetValue();
  }
  state = {
    list
  };
  
  deleteValue = id => {
    if (window.confirm("Are you sure you want to delete this Record?")) {
      this.props.onDeleteValue(id);
    }
  };
  
  componentDidUpdate(prevProps) {
    if (prevProps.valueData !== this.props.valueData && this.props.valueData) {
      if (this.props.valueData.length) {
        const dataSet = this.props.valueData.map((listData, key) => {
          return {
            srno: key + 1,
            code: listData.code,
            value: listData.value,
            unit: listData.unit,
            actions: (
              <div>
              <NavLink className="anchor" to={'/value-edit/' + listData.valueId} size="sm" > Edit </NavLink>
              <MDBBtn
              onClick={() => this.deleteValue(listData.valueId)}
              color="purple"
              size="sm"
              >
              Delete
              </MDBBtn>
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
            label: "Code",
            field: "code",
            sort: "asc",
            width: 150
          },
          {
            label: "Value",
            field: "value",
            sort: "asc",
            width: 150
          },
          {
            label: "Unit",
            field: "unit",
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
        <PageHeader title="Value" />
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
              <NavLink to="/value-add" className="btn btn-primary">
              Add Value
              </NavLink>
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
              valueData: state.Value.valueList,
              response: state.Value.response,
              error: state.Value.error
            };
          };
          
          const mapDispatchToProps = dispatch => {
            return {
              onGetValue: () => dispatch(valueActions.valueListStart()),
              onDeleteValue: id => dispatch(valueActions.valueDeleteStart(id))
            };
          };
          
          export default connect(
            mapStateToProps,
            mapDispatchToProps
            )(Value);
            