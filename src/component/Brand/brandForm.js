import React from 'react';
import { NavLink } from 'react-router-dom';

import InlineError from '../../component/Helpers/InlineError';

const brandFrom = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        {props.serverError ? <div className="alert alert-danger"><strong>{props.serverError}</strong></div> : ''}
        
        <div className="col-md-4">
          <div className="form-group">
            <label className="col-sm-12 control-label">Brand Name <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" autoFocus placeholder="Eg: Rubycon" className="form-control" name="brandname" onChange={(e) => props.onChange(e)} value={props.formdata.brandname} />
              {props.errors.brandname ? <InlineError text={props.errors.brandname} /> : ''}
            </div>
          </div>
        </div>
        
        <div className="col-md-4 text-center">
        <label className="col-sm-12 control-label">&nbsp;</label>
          <input type="submit" className="btn btn-success" value={props.loading ? 'Please Wait...' : 'Save'} /> &emsp;
        <NavLink to='/brand-list' className="btn btn-default" >Cancel </NavLink>
        </div>
      </div>
    </div>
  )
}

export default brandFrom;