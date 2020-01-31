import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn, MDBDataTable } from 'mdbreact';

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../Layout/Layout';
import * as subCatActions from '../../store/actions/subCatAction';

const rows = [
  {
    srno: 1,
    catname: 'Fetching Records. Please wait... ',
    subcatname: ' ',
    actions: ' '
  }
]

const noRows = [
  {
    srno: 1,
    catname: 'No data available',
    subcatname: ' ',
    actions: ' '
  }
]

class SubCategoryList extends Component {

  state = {
    rows,
    isModalOpen: false,
  }

  componentDidMount() {
    this.props.getLlist();
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Sub Category?")) {
      this.props.onDelete(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.subcatlist !== this.props.subcatlist) {
      if (this.props.subcatlist && this.props.subcatlist.length) {
        let updatedList = this.props.subcatlist.map((subcat, index) => {
          return (
            {
              srno: index + 1,
              catname: subcat.catName,
              subcatname: subcat.subCatName,
              actions: <div>  <NavLink className="anchor" to={'/sub-category-edit/' + subcat.subCatId} size="sm" > Edit </NavLink>  <MDBBtn color="purple" size="sm" onClick={() => this.deleteHandler(subcat.subCatId)} >Delete</MDBBtn> </div>
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
          label: 'Sub Category Name',
          field: 'subcatname',
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
        <PageHeader title="Sub Category" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
            }
            <NavLink to='/sub-category-add' className="btn btn-primary" > Add Sub Category </NavLink>
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
    error: state.SubCat.error,
    loading: state.SubCat.loading,
    response: state.SubCat.response,
    subcatlist: state.SubCat.subcatlist,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLlist: () => dispatch(subCatActions.subcatListStart()),
    onDelete: (id) => dispatch(subCatActions.subcatDeleteStart(id)),
    onReset: () => dispatch(subCatActions.subcatReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryList);