import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import PurchaseEntryDetails from '../../component/purchaseEntry/purchaseEntryDetails';
import Layout from '../Layout/Layout';
import * as purchaseEntryAction from '../../store/actions/purchaseEntryAction';

const rows = [
  {
    srNo: 1,
    productName: 'Fetching Records. Please wait... ',
    partNo: '',
    isUpdated: '',
    actions: ''
  }
]

const noRows = [
  {
    srNo: 1,
    productName: 'No data available',
    partNo: '',
    isUpdated: '',
    actions: ''
  }
]

class ProductList extends Component {

  state = {
    rows,
    isModalOpen: false,
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onGetProductList(this.props.match.params.id)
    }
    else {
      // this.props.histroy.push('./purchase-list');
    }
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Product?")) {
      this.props.onDelete(id);
    }
  }

  changeFinalStatus = (id) => {
    if (window.confirm("Are you sure you want to change the status?")) {
      this.props.onChangeFinalStatus(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.productlist !== this.props.productlist && this.props.productlist) {
      if (this.props.productlist.productDetails.length) {
        let updatedList = this.props.productlist.productDetails.map((product, index) => {
          return (
            {
              srNo: index + 1,
              productName: product.pname,
              partNo: product.partNo,
              isUpdated: product.isUpdated === '1' ? 'Yes' : 'No',
              actions: <div>  <NavLink className="anchor" to={'/purchase-entry-edit/' + this.props.match.params.id + '/' + product.pId} size="sm" > {this.props.productlist.currentlevel === 'level1' ? 'Edit' : 'View'}</NavLink>   </div>
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
          field: 'srNo',
          sort: 'asc',
        },
        {
          label: 'Product Name',
          field: 'productName',
          sort: 'asc',
        },
        {
          label: 'Part No',
          field: 'partNo',
          sort: 'asc',
        },
        {
          label: 'Is Updated',
          field: 'isUpdated',
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

    let purchaseEntryProList = (
      <Layout>
        <PageHeader title="Purchase Entry Details" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
            }
            {
              this.props.productlist ? <PurchaseEntryDetails changeFinalStatus={this.changeFinalStatus} entryDetails={this.props.productlist} /> : null
            }
            <MDBDataTable
              striped
              bordered
              hover
              data={data}
            />
          </div>
        </div>
      </Layout>
    );
    if (this.props.FinalStatusChanged) {
      const path = "/purchase-list-level2/" + encodeURI(this.props.response);
      purchaseEntryProList = <Redirect to={path} />
    }
    return (
      purchaseEntryProList
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.PurchaseEntry.error,
    loading: state.PurchaseEntry.loading,
    response: state.PurchaseEntry.response,
    FinalStatusChanged: state.PurchaseEntry.FinalStatusChanged,
    productlist: state.PurchaseEntry.purchaseEntryProductList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReset: () => dispatch(purchaseEntryAction.purchaseEntryReset()),
    onGetProductList: (id) => dispatch(purchaseEntryAction.purchaseEntryProductListStart(id)),
    onChangeFinalStatus: (id) => dispatch(purchaseEntryAction.purchaseEntryChangeFinalStatusStart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);