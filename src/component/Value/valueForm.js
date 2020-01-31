import React from 'react';
import { NavLink } from 'react-router-dom';

import InlineError from '../../component/Helpers/InlineError';

const valueFrom = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        {props.serverError ? <div className="alert alert-danger"><strong>{props.serverError}</strong></div> : ''}
        
        <div className="col-md-3">
          <div className="form-group">
            <label className="col-sm-12 control-label">Code <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" autoFocus placeholder="Eg: 1" className="form-control" name="code" onChange={(e) => props.onChange(e)} value={props.formdata.code} />
              {props.errors.code ? <InlineError text={props.errors.code} /> : ''}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label className="col-sm-12 control-label">Value <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" autoFocus placeholder="Eg: 1" className="form-control" name="value" onChange={(e) => props.onChange(e)} value={props.formdata.value} />
              {props.errors.value ? <InlineError text={props.errors.value} /> : ''}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label className="col-sm-12 control-label">Unit <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" autoFocus placeholder="Eg: pf" className="form-control" name="unit" onChange={(e) => props.onChange(e)} value={props.formdata.unit} />
              {props.errors.unit ? <InlineError text={props.errors.unit} /> : ''}
            </div>
          </div>
        </div>
        
        <div className="col-md-3 text-center">
        <label className="col-sm-12 control-label">&nbsp;</label>
          <input type="submit" className="btn btn-success" value={props.loading ? 'Please Wait...' : 'Save'} /> &emsp;
        <NavLink to='/value-list' className="btn btn-default" >Cancel </NavLink>
        </div>
      </div>
    </div>
  )
}

export default valueFrom;