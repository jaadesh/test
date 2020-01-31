import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../Layout/Layout';
import * as purchaseEntryActions from '../../store/actions/purchaseEntryAction';

const rows = [
  {
    srNo: 1,
    purchaseEntryName: 'Fetching Records. Please wait... ',
    totalProducts: '',
    purchaseEntryDate: '',
    userName: '',
    finalSubmit: '',
    actions: ''
  }
]

const noRows = [
  {
    srNo: 1,
    purchaseEntryName: 'No data available',
    totalProducts:'',
    purchaseEntryDate:'',
    userName: '',
    finalSubmit: '',
    actions: ''
  }
]

class PurchaseEntryList extends Component {

  state = {
    rows,
    isModalOpen: false,
  }

  componentDidMount() {
    this.props.getList(1);
    this.setState({ rows: noRows });
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Entry?")) {
      this.props.onDelete(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.purchaseEntryList !== this.props.purchaseEntryList && this.props.purchaseEntryList) {
      if (this.props.purchaseEntryList.length) {
        let updatedList = this.props.purchaseEntryList.map((purchase, index) => {
          return (
            {
              srno: index + 1,
              purchaseEntryName: purchase.entryName,
              totalProducts:purchase.productDetails.length,
              purchaseEntryDate: purchase.createdAt,
              userName:purchase.userDetails[0].name.fname + ' ' + purchase.userDetails[0].name.lname,
              finalSubmit: purchase.finalSubmit === 'true' ? 'Yes' : 'No',
              actions: <div><NavLink className="anchor" to={'/purchase-entry-product-list/' + purchase._id} > View </NavLink>  </div>
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
          label: 'Entry Name',
          field: 'purchaseEntryName',
          sort: 'asc',
        },
        {
          label: 'Total Products',
          field: 'totalProducts',
          sort: 'asc',
        },
        {
          label: 'Purchase Date',
          field: 'purchaseEntryDate',
          sort: 'asc',
        },
        {
          label: 'User',
          field: 'userName',
          sort: 'asc',
        },
        {
          label: 'Final Submit',
          field: 'finalSubmit',
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
        <PageHeader title="Purchase Entry" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
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
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.PurchaseEntry.error,
    loading: state.PurchaseEntry.loading,
    response: state.PurchaseEntry.response,
    purchaseEntryList: state.PurchaseEntry.purchaseEntryList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: (level) => dispatch(purchaseEntryActions.purchaseEntryListStart(level)),
    onReset: () => dispatch(purchaseEntryActions.purchaseEntryReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseEntryList);