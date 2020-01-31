import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn, MDBDataTable } from 'mdbreact';

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../Layout/Layout';
import * as leadTypeAction from '../../store/actions/leadTypeAction';

const rows = [
  {
    srno: 1,
    leadtypename: 'Fetching Records. Please wait... ',
    catname: '',
    actions: ''
  }
]

const noRows = [
  {
    srno: 1,
    leadtypename: 'No data available',
    catname: '',
    actions: ''
  }
]

class LeadTypeList extends Component {

  state = {
    rows,
  }

  componentDidMount() {
    this.props.getLlist();
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Lead Type?")) {
      this.props.onDelete(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.leadtypeList !== this.props.leadtypeList && this.props.leadtypeList) {
      if (this.props.leadtypeList.length) {
        let updatedList = this.props.leadtypeList.map((lead, index) => {
          return (
            {
              srno: index + 1,
              catname: lead.catName,
              leadtypename: lead.leadtypeName,
              actions: <div>  <NavLink className="anchor" to={'/lead-type-edit/' + lead.leadtypeId} > Edit </NavLink>  <MDBBtn color="purple" size="sm" onClick={() => this.deleteHandler(lead.leadtypeId)} >Delete</MDBBtn> </div>
            }
          )
        })

        this.setState({ rows: updatedList });
      }
      else {
        this.setState({ rows: noRows });
      }

    }
  }

  render() {

    const data = {
      columns: [
        {
          label: 'Sr No',
          field: 'srno',
          sort: 'asc',
        },
        {
          label: 'Category name',
          field: 'catname',
          sort: 'asc',
        },
        {
          label: 'Lead Type name',
          field: 'leadtypename',
          sort: 'asc',
        },
        {
          label: 'Actions',
          field: 'actions',
          sort: 'asc',
        },
      ],
      rows: this.state.rows
    }


    return (
      <Layout>
        <PageHeader title="Lead Type List" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
            }
            <NavLink to='/lead-type-add' className="btn btn-primary" > Add Lead Type </NavLink>
            <MDBDataTable
              striped
              bordered
              hover
              data={data}
            />

          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.LeadType.error,
    loading: state.LeadType.loading,
    response: state.LeadType.response,
    leadtypeList: state.LeadType.leadTypeList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLlist: () => dispatch(leadTypeAction.leadtypeListStart()),
    onDelete: (id) => dispatch(leadTypeAction.leadtypeDeleteStart(id)),
    onReset: () => dispatch(leadTypeAction.leadtypeReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadTypeList);