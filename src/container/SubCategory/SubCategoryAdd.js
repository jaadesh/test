import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import SubCategoryForm from '../../component/subCategory/subCategoryForm';
import { validateSubCategory } from '../../validations/subCategory';
import * as subCatActions from '../../store/actions/subCatAction';
import { CATEGORY_MASTER } from '../../config/config';

const defaultImage = '/assets/images/300.png';
const validExtension = (fileName, exts) => {
  return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}

class SubCategoryAdd extends Component {

  state = {
    formdata: {
      catname: '',
      subcatname: '',
      subcatimage: '',
      displayimage: defaultImage,
    },
    errors: {}
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

    const validationResponse = validateSubCategory(this.state.formdata, CATEGORY_MASTER);
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
        <PageHeader title="Sub Category Add" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="subcategoryform" method="post" onSubmit={this.formSubmitHandler}>
              <SubCategoryForm
                onChange={this.onChangeHandler}
                onFileChange={this.onFileChangeHandler}
                onFileClick={this.onFileClickHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                categories={CATEGORY_MASTER}
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

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(subCatActions.addSubcatStart(formdata)),
    onReset: () => dispatch(subCatActions.subcatReset()),
  }
}

const mapStateToProps = state => {
  return {
    error: state.SubCat.error,
    loading: state.SubCat.loading,
    response: state.SubCat.response,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryAdd);