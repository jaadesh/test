import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { MDBBtn, MDBDataTable } from "mdbreact";

import PageHeader from "../../component/Layout/PageHeader";
import Layout from "../../container/Layout/Layout";
import * as brandActions from "../../store/actions/brandAction";

const list = [
  {
    srno: "Fetching Records. Please wait... ",
    bname: " ",
    actions: " "
  }
];

const noList = [
  {
    srno: "No data available.",
    bname: " ",
    actions: " "
  }
];

class Brand extends Component {
  componentDidMount() {
    this.props.onGetBrand();
  }

  componentWillUnmount() {
    this.props.onReset();
  }
  
  state = {
    list
  };

  deleteBrand = id => {
    if (window.confirm("Are you sure you want to delete this Brand?")) {
      this.props.onDeleteBrand(id);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.brandData !== this.props.brandData && this.props.brandData) {
      if (this.props.brandData.length) {
        const dataSet = this.props.brandData.map((listData, key) => {
          return {
            srno: key + 1,
            bname: listData.brandName,
            actions: (
              <div>
                <NavLink className="anchor" to={'/brand-edit/' + listData.brandId} size="sm" > Edit </NavLink>
                <MDBBtn
                  onClick={() => this.deleteBrand(listData.brandId)}
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
          label: "Brand Name",
          field: "bname",
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
        <PageHeader title="Brand" />
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
            <NavLink to="/brand-add" className="btn btn-primary">
              Add Brand
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
    brandData: state.Brand.brandData,
    response: state.Brand.response,
    error: state.Brand.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBrand: () => dispatch(brandActions.getBrandStart()),
    onDeleteBrand: id => dispatch(brandActions.deleteBrandStart(id)),
    onReset: () => dispatch(brandActions.brandReset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Brand);
