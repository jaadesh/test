import React from "react";

import InlineError from "../../component/Helpers/InlineError";

const customerInfo = ({ props }) => {
 
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Customer Details</h4>
              <NavLink to='/user-add' target="_blank" className="btn btn-primary text-right" > <i class="fa fa-plus"></i> </NavLink>
            </div>
            <div className="panel-body">
              <div className="row">
                
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-sm-4 control-label">
                      Mobile <span className="red">*</span>
                    </label>
                    <div className="col-sm-8">
                      <input type="hidden" name="" value="" />
                      <input
                        type="text"
                        placeholder="Mobile"
                        className="form-control"
                        name="mobile"
                        maxLength="10"
                        onChange={e => props.onChange(e)}
                        value={props.formdata.mobile}
                      />
                      {props.errors.mobile ? (
                        <InlineError text={props.errors.mobile} />
                      ) : (
                          ""
                        )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-sm-4 control-label">
                      Email <span className="red">*</span>
                    </label>
                    <div className="col-sm-8">
                      <input type="hidden" name="" value="" />
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        onChange={e => props.onChange(e)}
                        value={props.formdata.email}
                        disabled={true}
                      />
                      {props.errors.email ? (
                        <InlineError text={props.errors.email} />
                      ) : (
                          ""
                        )}
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-sm-4 control-label">
                      First Name <span className="red">*</span>
                    </label>
                    <div className="col-sm-8">
                      <input type="hidden" name="" value="" />
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="fname"
                        onChange={e => props.onChange(e)}
                        value={props.formdata.fname}
                        disabled={true}
                      />
                      {props.errors.fname ? (
                        <InlineError text={props.errors.fname} />
                      ) : (
                          ""
                        )}
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-sm-4 control-label">
                      Last Name <span className="red">*</span>
                    </label>
                    <div className="col-sm-8">
                      <input type="hidden" name="" value="" />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        name="lname"
                        onChange={e => props.onChange(e)}
                        value={props.formdata.lname}
                        disabled={true}
                      />
                      {props.errors.lname ? (
                        <InlineError text={props.errors.lname} />
                      ) : (
                          ""
                        )}
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default customerInfo;
