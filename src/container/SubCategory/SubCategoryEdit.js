import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import SubCategoryFrom from '../../component/subCategory/subCategoryForm';
import { validateSubCategory } from '../../validations/subCategory';
import * as subCatActions from '../../store/actions/subCatAction';
import * as Config from '../../config/config';


let defaultImage = '/assets/images/300.png';
const validExtension = (fileName, exts) => {
  return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}

class SubCategoryEdit extends Component {

  state = {
    formdata: {
      catname: '',
      subcatname: '',
      subcatimage: '',
      displayimage: defaultImage,
      id: '',
    },
    errors: {}
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id)
    }
    else {
      this.props.histroy.push('./sub-category-list');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.subcatData !== this.props.subcatData && this.props.subcatData) {
      const newSubcatData = this.props.subcatData;
      const formData = updateObject(this.state.formdata, {
        catname: newSubcatData.catName,
        subcatname: newSubcatData.subCatName,
        displayimage: newSubcatData.subCatBasePath + newSubcatData.subCatImage,
        id: newSubcatData.subCatId,
      });
      defaultImage = newSubcatData.subCatBasePath + newSubcatData.subCatImage
      this.setState({ formdata: formData });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.subcatData !== prevState.subcatData) {
      return {
        subcatData: nextProps.subcatData
      }
    }
    return null
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  onChangeHandler = (e) => {
    const formData = updateObject(this.state.formdata, { [e.target.name]: e.target.value });
    this.setState({ formdata: formData });
  }

  onFileChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (validExtension(event.target.files[0].name, ['.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG'])) {
        this.setState({ errors: {} });
        const formData = updateObject(this.state.formdata, { [event.target.name]: event.target.files[0], displayimage: URL.createObjectURL(event.target.files[0]) })
        this.setState({ formdata: formData });
      }
      else {
        const errors = updateObject(this.state.errors, { subcatimage: 'Invalid file, .jpg,.png,.jpeg files allowed.' });
        this.setState({ errors: errors });
      }
    }
  }

  onFileClickHandler = () => {
    const formData = updateObject(this.state.formdata, { subcatimage: '', displayimage: defaultImage, });
    this.setState({ formdata: formData });
  }

  formSubmitHandler = (e) => {
    e.preventDefault();

    const validationResponse = validateSubCategory(this.state.formdata, Config.CATEGORY_MASTER);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  render() {

    let subcat = (
      <Layout>
        <PageHeader title="Sub Category Edit" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="subcategoryfrom" method="post" onSubmit={this.formSubmitHandler}>
              <SubCategoryFrom
                onChange={this.onChangeHandler}
                onFileChange={this.onFileChangeHandler}
                onFileClick={this.onFileClickHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                categories={Config.CATEGORY_MASTER}
                serverError={this.props.error}
                loading={this.props.loading}
              />
            </form>
          </div>
        </div>
      </Layout>
    )

    if (this.props.response) {
      const path = "/sub-category-list/" + encodeURI(this.props.response);
      subcat = <Redirect to={path} />
    }

    return (
      subcat
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.SubCat.error,
    loading: state.SubCat.loading,
    response: state.SubCat.response,
    subcatData: state.SubCat.subcatData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchEditData: (id) => dispatch(subCatActions.subcatFetchEditStart(id)),
    onSubmit: (formdata) => dispatch(subCatActions.subcatEditStart(formdata)),
    onReset: () => dispatch(subCatActions.subcatReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryEdit);