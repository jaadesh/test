import React from "react";
// import aux from "../../hoc/Auxillary";
// import { NavLink } from "react-router-dom";

// import InlineError from "../../component/Helpers/InlineError";

const purchaseEntryDetails = props => {
  let isUpdatedArr = [];
  props.entryDetails.productDetails.forEach((element,key) => {
    isUpdatedArr.push(element.isUpdated);
  });
 let flag = isUpdatedArr.indexOf('0') > -1;
 
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="panel-btns">
        </div>
        <b>Purchase Entry Details</b>
      </div>

      <div className="panel-body">
      <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">
                Entry No.<span className="red">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="Entry no."
                  className="form-control"
                  disabled
                  id=""
                  name=""
                  value={props.entryDetails._id}
                />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">
                Entry Name<span className="red">*</span>
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="Entry Name"
                  className="form-control"
                  disabled
                  id=""
                  name=""
                  value={props.entryDetails.entryName}
                />
              </div>
            </div>
          </div>
        {props.entryDetails.currentlevel === 'level1' ? <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">
                {flag ? 'Will be enabled after all product got updated.' :''} &nbsp;
              </label>
              <div className="col-sm-12">
                <input type="submit" disabled={flag} className="btn btn-success" value={props.loading ? 'Please Wait...' : 'Save'} onClick={(id) => props.changeFinalStatus(props.entryDetails._id)}  />
              </div>
            </div>
          </div> : ''}
          
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
}

export default purchaseEntryDetails;