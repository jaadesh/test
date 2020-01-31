import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn, MDBDataTable } from 'mdbreact';

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../Layout/Layout';
import * as seriesActions from '../../store/actions/seriesAction';

const rows = [
  {
    srNo: "1",
    seriesName: 'Fetching Records. Please wait... ',
    catName: ' ',
    subcatName: ' ',
    brandName: ' ',
    isCompleted: ' ',
    actions: ' '
  }
]

const noRows = [
  {
    srNo: "1",
    seriesName: 'No data available',
    catName: ' ',
    subcatName: ' ',
    brandName: ' ',
    isCompleted: ' ',
    actions: ' '
  }
]

class SeriesList extends Component {

  state = {
    rows,
    isModalOpen: false,
  }

  componentDidMount() {
    this.props.getList();
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this Series?")) {
      this.props.onDelete(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.serieslist !== this.props.serieslist) {
      if (this.props.serieslist && this.props.serieslist.length) {
        let updatedList = this.props.serieslist.map((series, index) => {
          // let curLowESR = series.lowESR ? 'Yes': 'No';
          // let curhighRippleCurrent = series.highRippleCurrent ? 'Yes': 'No';
          return (
            {
              srNo: index + 1,
              seriesName: series.seriesName,
              catName: series.catName,
              subcatName: series.Subcategory.subCatName,
              brandName: series.Brand.brandName,
              isCompleted: series.isComplete ? 'Yes' : 'No',
              actions: <div>  <NavLink className="anchor" to={'/series-edit/' + series.seriesId} size="sm" > Edit </NavLink>  <MDBBtn color="purple" size="sm" onClick={() => this.deleteHandler(series.seriesId)} >Delete</MDBBtn> </div>
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
          label: 'Series Name',
          field: 'seriesName',
          sort: 'asc',
        },
        {
          label: 'Category name',
          field: 'catName',
          sort: 'asc',
        },
        {
          label: 'Sub Category name',
          field: 'subcatName',
          sort: 'asc',
        },
        {
          label: 'Brand name',
          field: 'brandName',
          sort: 'asc',
        },
        {
          label: 'Is Completed',
          field: 'isCompleted',
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
        <PageHeader title="Series" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
            }
            <NavLink to='/series-add' className="btn btn-primary" > Add Series </NavLink>
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
    onReset: () => dispatch(seriesActions.seriesReset()),
    onDelete: (id) => dispatch(seriesActions.seriesDeleteStart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesList);