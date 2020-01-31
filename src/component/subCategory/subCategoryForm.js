import React from 'react';
import { NavLink } from 'react-router-dom';

import InlineError from '../../component/Helpers/InlineError';

const subCategoryFrom = (props) => {

  let categoryoptions = null;
  if (props.categories) {
    categoryoptions = props.categories.map(eachCat => (
      <option key={eachCat} value={eachCat}>{eachCat}</option>
    ))
  }
  return (
    <div className="row">
      <div className="col-md-12">
        {props.serverError ? <div className="alert alert-danger"><strong>{props.serverError}</strong></div> : ''}
        <div className="col-md-4">
          <div className="form-group">
            <label className="col-sm-12 control-label">Select Category <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <select value={props.formdata.catname} className="form-control" name='catname' onChange={(e) => props.onChange(e)} >
                <option value=''>Choose Category</option>
                {categoryoptions}
              </select>
              {props.errors.catname ? <InlineError text={props.errors.catname} /> : ''}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="col-sm-12 control-label">Sub Category Name <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" autoFocus placeholder="Eg: Radial Lead" className="form-control" name="subcatname" onChange={(e) => props.onChange(e)} value={props.formdata.subcatname} />
              {props.errors.subcatname ? <InlineError text={props.errors.subcatname} /> : ''}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="col-sm-12 control-label">Sub Category Image <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="file" placeholder="Choose One" className="form-control" name="subcatimage" onChange={(e) => props.onFileChange(e)} onClick={props.onFileClick} />
              {props.errors.subcatimage ? <InlineError text={props.errors.subcatimage} /> : ''}
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-md-offset-8 col-md-4">
          <img src={props.formdata.displayimage} className="img-responsive" alt="Sub Category" />
        </div>
        <div className="col-md-12 text-center">
          <input type="submit" className="btn btn-success" disabled={props.loading} value={props.loading ? 'Please Wait...' : 'Save'} /> &emsp;
        <NavLink to='/sub-category-list' className="btn btn-default" >Cancel </NavLink>
        </div>
      </div>
    </div>
  )
}

export default subCategoryFrom;