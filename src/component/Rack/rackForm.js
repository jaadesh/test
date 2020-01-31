import React from 'react';
import { NavLink } from 'react-router-dom';

import InlineError from '../../component/Helpers/InlineError';

const rackFrom = (props) => {
  let locationoptions = null;
  if (props.locations) {
    locationoptions = props.locations.map(eachLocation => (
      <option key={eachLocation.locationId} value={eachLocation.locationId}>
        {eachLocation.locationName}
      </option>
    ));
  }
 
  let newRack = null;
  if (props.rackContainer) {
    newRack = props.rackContainer.map((eachrack, index) => (
      <div className="col-md-6" key={index}>
      <div className="col-md-6">
        <div className="form-group">
          <div className="col-sm-12">
            <input type="text" autoFocus placeholder="Eg: 1" className="form-control" name={index}  value={eachrack.rackName} disabled={true}  onChange={(e) => props.onChange(e)} />
         </div>
        </div>
      </div>
      <div className="col-md-6">
        <input type="button" className="btn btn-success" value='Edit' onClick={() => props.rackEdit(eachrack.rackName, index, eachrack.isUsed !== "0" ? 1 : 2 )} />
        &nbsp;
        <input type="button" className="btn btn-success" value="Remove" onClick={() => props.rackRemove(index, eachrack.isUsed !== "0" ? 1 : 2)} />
      </div>
    </div>
    ));
  }

  return (
    <div className="row">
      <div className="col-md-12">
        {props.serverError ? <div className="alert alert-danger"><strong>{props.serverError}</strong></div> : ''}
        
        <div className="col-md-3">
          <div className="form-group">
            <label className="col-sm-12 control-label">Select Location <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
            <select
                  className="form-control"
                  name="location"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.location}
                  disabled= {true}
                >
                  <option value="">Choose Location</option>
                  {locationoptions}
                </select>
                {props.errors.location ? (
                  <InlineError text={props.errors.location} />
                ) : (
                  ""
                )}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label className="col-sm-12 control-label">Rack <span className="asterisk"> * </span> </label>
            <div className="col-sm-12">
              <input type="text" autoFocus placeholder="Eg: 1" className="form-control" name="rack" onChange={(e) => props.onChange(e)} value={props.formdata.rack} />
              {props.errors.rack ? <InlineError text={props.errors.rack} /> : ''}
            </div>
          </div>
        </div>
        <div className="col-md-6 text-left">
        <label className="col-sm-12 control-label">&nbsp;</label>
          <input type="button" className="btn btn-success" value='Add' onClick={e => props.onAddMore(e)} /> &emsp;
        </div>
      </div>
      <hr />
      <div className="col-md-12 rackAddMoreContainer">
        {newRack}
        
      </div>
      <div className="col-md-12 text-center">
        <br />
        <br />
        <input type="submit" disabled={props.formdata.rack ? true : false}  className="btn btn-success" value={props.loading ? 'Please Wait...' : 'Save'} /> &emsp;
        <NavLink to='/rack-list' className="btn btn-default" >Cancel </NavLink>
      </div>
      
    </div>
    
  )
}

export default rackFrom;