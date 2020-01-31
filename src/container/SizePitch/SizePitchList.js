import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBBtn, MDBDataTable } from 'mdbreact';

import PageHeader from '../../component/Layout/PageHeader';
import Layout from '../Layout/Layout';
import * as sizePitchAction from '../../store/actions/sizePitchAction';

const rows = [
  {
    srno: 1,
    spcatname: 'Fetching Records. Please wait... ',
    spdiameter: '',
    spheight: '',
    sppitch: '',
    spwidth: '',
    actions: '',
  }
]

const noRows = [
  {
    srno: 1,
    spcatname: 'No data available',
    spdiameter: '',
    spheight: '',
    sppitch: '',
    spwidth: '',
    actions: '',
  }
]

class SizePitchList extends Component {

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
    if (window.confirm("Are you sure you want to delete this Size Pitch?")) {
      this.props.onDelete(id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sizepitchList !== this.props.sizepitchList && this.props.sizepitchList) {
      if (this.props.sizepitchList.length) {
        let updatedList = this.props.sizepitchList.map((size, index) => {
          return (
            {
              srno: index + 1,
              spcatname: size.catName,
              spdiameter: size.spDiameter,
              spheight: size.spHeight,
              sppitch: size.spPitch,
              spwidth: size.spWidth.toString(),
              actions: <div>  <NavLink className="anchor" to={'/size-pitch-edit/' + size.sizepitchId} > Edit </NavLink>  <MDBBtn color="purple" size="sm" onClick={() => this.deleteHandler(size.sizepitchId)} >Delete</MDBBtn> </div>
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
          field: 'spcatname',
          sort: 'asc',
        },
        {
          label: 'Diameter',
          field: 'spdiameter',
          sort: 'asc',
        },
        {
          label: 'Height',
          field: 'spheight',
          sort: 'asc',
        },
        {
          label: 'Pitch',
          field: 'sppitch',
          sort: 'asc',
        },
        {
          label: 'Width',
          field: 'spwidth',
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
        <PageHeader title="Size Pitch List" />
        <div className="contentpanel">
          <div className="row">
            {
              this.props.response ? <div className="alert alert-success"><strong>{this.props.response}</strong></div> : this.props.match.params.msg && !this.props.error ? <div className="alert alert-success"><strong>{this.props.match.params.msg}</strong></div> : null
            }
            {
              this.props.error ? <div className="alert alert-danger"><strong>{this.props.error}</strong></div> : null
            }
            <NavLink to='/size-pitch-add' className="btn btn-primary" > Add Size Pitch </NavLink>
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
    error: state.SizePitch.sizepitcherror,
    loading: state.SizePitch.sizepitchloading,
    response: state.SizePitch.sizepitchresponse,
    sizepitchList: state.SizePitch.sizepitchList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLlist: () => dispatch(sizePitchAction.sizepitchListStart()),
    onDelete: (id) => dispatch(sizePitchAction.sizepitchDeleteStart(id)),
    onReset: () => dispatch(sizePitchAction.sizepitchReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SizePitchList);