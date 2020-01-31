import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn, MDBDataTable } from 'mdbreact';

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../Layout/Layout';
import * as seriesActions from '../../store/actions/seriesAction';

const rows = [
  {
    srNo: 1,
    customerName: 'Fetching Records. Please wait... ',
    quotationDate:'',
    quotationAmount:'',
    actions: ''
  }
]

const noRows = [
  {
    srNo: 1,
    customerName: 'No data available',
    quotationDate:'',
    quotationAmount:'',
    actions: ''
  }
]

class QuotationList extends Component {

  state = {
    rows,
    isModalOpen: false,
  }

  componentDidMount() {
    this.props.getList();
  }

  componentWillUnmount() {
    // this.props.onReset();
  }

  deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Series?")) {
      this.props.onDelete(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.serieslist !== this.props.serieslist && this.props.serieslist) {
      if (this.props.serieslist.length) {
        let updatedList = this.props.serieslist.map((series, index) => {
          return (
            {
              srNo: index + 1,
              customerName: series.seriesName,
              quotationDate: series.catName,
              quotationAmount: series.subcatDetails[0].subcatname,
              actions: <div>  <NavLink className="anchor" to={'/quotation-edit/' + series._id} size="sm" > Edit </NavLink>  <MDBBtn color="purple" size="sm" onClick={() => this.deleteHandler(series._id)} >Delete</MDBBtn> </div>
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
          label: 'Customer Name',
          field: 'seriesName',
          sort: 'asc',
        },
        {
          label: 'Quotation Date',
          field: 'catName',
          sort: 'asc',
        },
        {
          label: 'Amount',
          field: 'subcatName',
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
        <PageHeader title="Quotation" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
            }
            <NavLink to='/quotation-add' className="btn btn-primary" > Add Quotation </NavLink>
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
    error: state.Series.error,
    loading: state.Series.loading,
    response: state.Series.response,
    serieslist: state.Series.seriesList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(seriesActions.seriesListStart()),
    onDelete: (id) => dispatch(seriesActions.seriesDeleteStart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotationList);