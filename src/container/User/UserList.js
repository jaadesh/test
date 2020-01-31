import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { MDBBtn, MDBDataTable } from "mdbreact";

import PageHeader from "../../component/Layout/PageHeader";
import Layout from "../../container/Layout/Layout";
import * as userActions from "../../store/actions/userAction";

const list = [
  {
    srNo: 1,
    name: null,
    // designation: null,
    email:null,
    mobile:null,
    // companyName:null,
    // GSTNo:null,
    // address:null,
    // phoneNo:null,
    // typeOfCompany:null,
    // manufactureProduct:null,
    // reference:null,
    // details:null,
    role:null,
    actions: null
  }
];

const noList = [
  {
    srNo: 1,
    name: "No data available.",
    // designation: null,
    email:null,
    mobile:null,
    // companyName:null,
    // GSTNo:null,
    // address:null,
    // phoneNo:null,
    // typeOfCompany:null,
    // manufactureProduct:null,
    // reference:null,
    // details:null,
    role:null,
    actions: null
  }
];

class User extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }
  state = {
    list
  };

  componentWillUnmount() {
    this.props.onReset();
  }

  deleteUser = id => {
    if (window.confirm("Are you sure you want to delete this User?")) {
      this.props.onDeleteUser(id);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userData !== this.props.userData && this.props.userData) {
      if (this.props.userData.length) {
        const dataSet = this.props.userData.map((listData, key) => {
          return {
            srno: key + 1,
            name: listData.fname +" "+ listData.lname,
            email:listData.email,
            mobile:listData.mobile,
            role:listData.Role.roleName,
            actions: (
              <div>
                <NavLink className="anchor" to={'/user-edit/' + listData.userId} size="sm" > Edit </NavLink>
                <MDBBtn
                  onClick={() => this.deleteUser(listData.userId)}
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
          label: "User Name",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 150
        },
        {
          label: "Mobile",
          field: "mobile",
          sort: "asc",
          width: 150
        },
        {
          label: "User Type",
          field: "role",
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
        <PageHeader title="User" />
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
            <NavLink to="/user-add" className="btn btn-primary">
              Add User
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
    userData: state.User.userList,
    response: state.User.response,
    error: state.User.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUser: () => dispatch(userActions.userListStart()),
    onDeleteUser: id => dispatch(userActions.userDeleteStart(id)),
    onReset: () => dispatch(userActions.userReset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
