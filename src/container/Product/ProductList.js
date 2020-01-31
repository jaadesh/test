import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn, MDBDataTable } from 'mdbreact';

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../Layout/Layout';
import * as productActions from '../../store/actions/productAction';

const rows = [
  {
    srNo: 1,
    productName: 'Fetching Records. Please wait... ',
    partNo: '',
    categoryName: '',
    subCategoryName: '',
    seriesName: '',
    isCompleted: '',
    actions: ''
  }
]

const noRows = [
  {
    srNo: 1,
    productName: 'No data available',
    partNo: '',
    categoryName:'',
    subCategoryName:'',
    seriesName:'',
    isCompleted: '',
    actions: ''
  }
]

class ProductList extends Component {

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
    if (window.confirm("Are you sure you want to delete this Product?")) {
      this.props.onDelete(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.productlist !== this.props.productlist && this.props.productlist) {
      if (this.props.productlist.length) {
        let updatedList = this.props.productlist.map((product, index) => {
          // let curLowESR = product.lowESR ? 'Yes': 'No';
          // let curhighRippleCurrent = product.highRippleCurrent ? 'Yes': 'No';
          return (
            {
              srNo: index + 1,
              productName: product.productName,
              partNo: product.partNo,
              categoryName: product.catName,
              subCategoryName: product.subcategory.subcatname,
              seriesName: product.seriesData.seriesName,
              isCompleted:product.isComplete ? 'Yes': 'No',
              actions: <div>  <NavLink className="anchor" to={'/product-edit/' + product._id} size="sm" > Edit </NavLink>  <MDBBtn color="purple" size="sm" onClick={() => this.deleteHandler(product._id)} >Delete</MDBBtn> </div>
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
          label: 'Sr No ',
          field: 'srNo',
          sort: 'asc',
        },
        {
          label: 'Product ',
          field: 'productName',
          sort: 'asc',
        },
        {
          label: 'Part No ',
          field: 'partNo',
          sort: 'asc',
        },
        {
          label: 'Category ',
          field: 'categoryName',
          sort: 'asc',
        },
        {
          label: 'Subcategory ',
          field: 'subCategoryName',
          sort: 'asc',
        },
        {
          label: 'Series ',
          field: 'seriesName',
          sort: 'asc',
        },
        {
          label: 'Completed ',
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
        <PageHeader title="Product" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
            }
            <NavLink to='/product-add' className="btn btn-primary" > Add Product </NavLink>
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
    error: state.Product.error,
    loading: state.Product.loading,
    response: state.Product.response,
    productlist: state.Product.productList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(productActions.productListStart()),
    onReset: () => dispatch(productActions.productReset()),
    onDelete: (id) => dispatch(productActions.productDeleteStart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);