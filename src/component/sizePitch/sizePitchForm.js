import React from 'react';
import { NavLink } from 'react-router-dom';

import InlineError from '../Helpers/InlineError';
import { CATEGORY_MASTER } from '../../config/config';

const sizePitchForm = (props) => {

  let categoryoptions = null;
  if (CATEGORY_MASTER) {
    categoryoptions = CATEGORY_MASTER.map(eachCat => (
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
              <select value={props.formdata.sp_catname} className="form-control" name='sp_catname' onChange={(e) => props.onChange(e)} >
                <option value=''>Choose Category</option>
                {categoryoptions}
              </select>
              {props.errors.sp_catname ? <InlineError text={props.errors.sp_catname} /> : ''}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label className="col-sm-12 control-label">Diameter <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" autoFocus placeholder="Eg: " className="form-control" name="sp_diameter" onChange={(e) => props.onChange(e)} value={props.formdata.sp_diameter} />
              {props.errors.sp_diameter ? <InlineError text={props.errors.sp_diameter} /> : ''}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label className="col-sm-12 control-label">Height <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" placeholder="Eg: " className="form-control" name="sp_height" onChange={(e) => props.onChange(e)} value={props.formdata.sp_height} />
              {props.errors.sp_height ? <InlineError text={props.errors.sp_height} /> : ''}
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="col-sm-12 control-label">Pitch <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" placeholder="Eg: " className="form-control" name="sp_pitch" onChange={(e) => props.onChange(e)} value={props.formdata.sp_pitch} />
              {props.errors.sp_pitch ? <InlineError text={props.errors.sp_pitch} /> : ''}
            </div>
          </div>
        </div>

        {
          props.showWidth ? <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">Width <span className="asterisk"> * </span> </label>
              <div className="col-sm-12">
                <input type="text" placeholder="Eg: " className="form-control" name="sp_width" onChange={(e) => props.onChange(e)} value={props.formdata.sp_width} />
                {props.errors.sp_width ? <InlineError text={props.errors.sp_width} /> : ''}
              </div>
            </div>
          </div>
            :
            null
        }


        <div className="clearfix"> </div>
        <div className="col-md-4 text-center">
          <input type="submit" className="btn btn-success" value={props.loading ? 'Please Wait...' : 'Save'} /> &emsp;
        <NavLink to='/size-pitch-list' className="btn btn-default" >Cancel </NavLink>
        </div>
      </div>
    </div>
  )
}

export default sizePitchForm;