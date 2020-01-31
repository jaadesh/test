import React from "react";
import { NavLink } from "react-router-dom";

import InlineError from "../../component/Helpers/InlineError";

const userFrom = props => {
  // let roleOptions = null;
  // if (props.role) {
  //   roleOptions = props.role.map(eachCat => (
  //     <option key={eachCat} value={eachCat}>
  //       {eachCat}
  //     </option>
  //   ));
  // }


  let roleOptions = null;
  if (props.role.length !== 0) {
    roleOptions = Object.keys(props.role).map(eachRole => {
      return (
        <option
          key={eachRole}
          value={eachRole}
        >
          {props.role[eachRole]}
        </option>
      );
    });
  } else {
    roleOptions = <option value="">No Role Available</option>;
  }

  let typeOfCompanyOptions = null;
  if (props.typeOfCompany) {
    typeOfCompanyOptions = props.typeOfCompany.map(eachtype => (
      <option key={eachtype} value={eachtype}>
        {eachtype}
      </option>
    ));
  }

  let checkChangePasswordDiv = null;
  if (props.formdata.id) {
    checkChangePasswordDiv = (
      <div className="form-group">
        <label className="col-sm-4 control-label">Change Password?</label>
        <div className="col-sm-8">
          <input
            type="checkbox"
            placeholder=""
            className="form-control"
          
            name="checkChangePassword"
            onChange={e => props.onToggle(e)}
            value = {props.formdata.checkChangePassword}
          />
          {props.errors.checkChangePassword ? (
            <InlineError text={props.errors.checkChangePassword} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  // let countryOptions = null;
  // if (props.country) {
  //   countryOptions = props.country.map(eachcountry => (
  //     <option key={eachcountry} value={eachcountry}>
  //       {eachcountry}
  //     </option>
  //   ));
  // } 

  let countryOptions = null;
  if (props.country.length !== 0) {
    countryOptions = Object.keys(props.country).map(eachCountry => {
      return (
        <option
          key={props.country[eachCountry]._id}
          value={props.country[eachCountry]._id}
        >
          {props.country[eachCountry].countryName}
        </option>
      );
    });
  } else {
    countryOptions = <option value="">No country Available</option>;
  }

  let stateOptions = null;
  const defaultobj = { _id: "", stateName: "Choose State" };
  if (props.state.length !== 0) {
    const found = props.state.some(el => el.stateName === "Choose State");
    if (!found) props.state.push(defaultobj);
    stateOptions = Object.keys(props.state).map(eachState => {
      return (
        <option
          key={props.state[eachState]._id}
          value={props.state[eachState]._id}
        >
          {props.state[eachState].stateName}
        </option>
      );
    });
  } else {
    stateOptions = (
      <option value="">No state available for selected country.</option>
    );
  }

  return (
    <div className="row">
      <div className="col-md-12">
        {props.serverError ? (
          <div className="alert alert-danger">
            <strong>{props.serverError}</strong>
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">
                Select Role <span className="red"> * </span>
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  name="role"
                  disabled={props.formdata.id ? true : false}
                  onChange={e => props.onChange(e)}
                  value={props.formdata.role}
                >
                  <option value="">Choose User Role</option>
                  {roleOptions}
                </select>
                {props.errors.role ? (
                  <InlineError text={props.errors.role} />
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
                />
                {props.errors.email ? (
                  <InlineError text={props.errors.email} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
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
          <div className="clearfix" />
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Designation</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Designation"
                  className="form-control"
                
                  name="designation"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.designation}
                />
                {props.errors.designation ? (
                  <InlineError text={props.errors.designation} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Company Name</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="form-control"
                
                  name="companyName"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.companyName}
                />
                {props.errors.companyName ? (
                  <InlineError text={props.errors.companyName} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="clearfix" />

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">GST No.</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="GST No"
                  className="form-control"
                
                  name="GSTNo"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.GSTNo}
                />
                {props.errors.GSTNo ? (
                  <InlineError text={props.errors.GSTNo} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">
                Manufacture Product
              </label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Manufacture Product"
                  className="form-control"
                
                  name="manufactureProduct"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.manufactureProduct}
                />
                {props.errors.manufactureProduct ? (
                  <InlineError text={props.errors.manufactureProduct} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="clearfix" />

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Reference</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Reference"
                  className="form-control"
                
                  name="reference"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.reference}
                />
                {props.errors.reference ? (
                  <InlineError text={props.errors.reference} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Type of company</label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  name="typeOfCompany"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.typeOfCompany}
                >
                  <option value="">Choose Type Of Company</option>
                  {typeOfCompanyOptions}
                </select>
                {props.errors.typeOfCompany ? (
                  <InlineError text={props.errors.typeOfCompany} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="clearfix" />

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Address Line 1</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  className="form-control"
                
                  name="addressLine1"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.addressLine1}
                />
                {props.errors.addressLine1 ? (
                  <InlineError text={props.errors.addressLine1} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Address Line 2</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="form-control"
                
                  name="addressLine2"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.addressLine2}
                />
                {props.errors.addressLine2 ? (
                  <InlineError text={props.errors.addressLine2} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Landmark</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Landmark"
                  className="form-control"
                
                  name="landmark"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.landmark}
                />
                {props.errors.landmark ? (
                  <InlineError text={props.errors.landmark} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">City</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                
                  name="city"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.city}
                />
                {props.errors.city ? (
                  <InlineError text={props.errors.city} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Country</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <select
                  className="form-control"
                  name="country"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.country}
                >
                  <option value="">Choose Country</option>
                  {countryOptions}
                </select>
                {props.errors.country ? (
                  <InlineError text={props.errors.country} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">State</label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  name="state"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.state}
                >
                  {stateOptions}
                </select>
                {props.errors.state ? (
                  <InlineError text={props.errors.state} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Pincode</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="form-control"
                
                  name="pincode"
                  maxLength="6"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.pincode}
                />
                {props.errors.pincode ? (
                  <InlineError text={props.errors.pincode} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Phone</label>
              <div className="col-sm-8">
                <input type="hidden" name="" value="" />
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control"
                
                  name="phone"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.phone}
                />
                {props.errors.phone ? (
                  <InlineError text={props.errors.phone} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="clearfix" />

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">Details</label>
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  placeholder="Details"
                  rows="5"
                
                  name="details"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.details}
                />
                {props.errors.details ? (
                  <InlineError text={props.errors.details} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={! props.formdata.checkChangePassword ? "hidden show-pass" : ""}>
              <div className="form-group">
                <label className="col-sm-4 control-label">Password</label>
                <div className="col-sm-8">
                  <input type="hidden" name="" value="" />
                  <input
                    type="password"
                    placeholder="Eg. ABC@123"
                    className="form-control"
                  
                    name="password"
                    onChange={e => props.onChange(e)}
                    value={props.formdata.password}
                  />
                  {props.errors.password ? (
                    <InlineError text={props.errors.password} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Confirm Password
                </label>
                <div className="col-sm-8">
                  <input type="hidden" name="" value="" />
                  <input
                    type="password"
                    placeholder="Eg. ABC@123"
                    className="form-control"
                  
                    name="confirmPassword"
                    onChange={e => props.onChange(e)}
                    value={props.formdata.confirmPassword}
                  />
                  {props.errors.confirmPassword ? (
                    <InlineError text={props.errors.confirmPassword} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {checkChangePasswordDiv}
            {/* <div className="form-group">
                <label className="col-sm-4 control-label">
                 Change Password?
                </label>
                <div className="col-sm-8">
                  <input
                    type="checkbox"
                    placeholder=""
                    className="form-control"
                  
                    name="checkChangePassword"
                    onChange={e => props.onChange(e)}
                    value={props.formdata.checkChangePassword}
                  />
                  {props.errors.checkChangePassword ? (
                    <InlineError text={props.errors.checkChangePassword} />
                  ) : (
                    ""
                  )}
                </div>
              </div> */}
          </div>
        </div>

        <div className="clearfix" />
        <div className="col-md-12 text-center">
          <input
            type="submit"
            className="btn btn-success"
            value={props.loading ? "Please Wait..." : "Save"}
          />{" "}
          &emsp;
          <NavLink to="/user-list" className="btn btn-default">
            Cancel{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default userFrom;
