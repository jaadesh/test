import React from 'react';
import { NavLink } from 'react-router-dom';

import InlineError from '../Helpers/InlineError';

const leadTypeForm = (props) => {

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


        <div className="col-md-6">
          <div className="form-group">
            <label className="col-sm-4 control-label">Select Category <span className="asterisk"> * </span> </label>
            <div className="col-sm-8">
              <select value={props.formdata.catname} className="form-control" name='catname' onChange={(e) => props.onChange(e)} >
                <option value=''>Choose Category</option>
                {categoryoptions}
              </select>
              {props.errors.catname ? <InlineError text={props.errors.catname} /> : ''}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="col-sm-4 control-label">Lead Type Name <span className="asterisk"> * </span> </label>
            <div className="col-sm-8">
              <input type="text" autoFocus placeholder="Eg: Radial Lead" className="form-control" name="leadtypename" onChange={(e) => props.onChange(e)} value={props.formdata.leadtypename} />
              {props.errors.leadtypename ? <InlineError text={props.errors.leadtypename} /> : ''}
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
        <div className="col-md-12 text-center">
          <input type="submit" disabled={props.loading} className="btn btn-success" value={props.loading ? 'Please Wait...' : 'Save'} /> &emsp;
        <NavLink to='/lead-type-list' className="btn btn-default" >Cancel </NavLink>
        </div>
      </div>
    </div>
  )
}

export default leadTypeForm;