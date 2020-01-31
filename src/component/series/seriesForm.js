import React from "react";
import { NavLink } from "react-router-dom";

import InlineError from "../../component/Helpers/InlineError";

const seriesFrom = props => {
  let categoryoptions = null;
  if (props.categories) {
    categoryoptions = props.categories.map(eachCat => (
      <option key={eachCat} value={eachCat}>
        {eachCat}
      </option>
    ));
  }
  let viewUploadedPFD = props.formdata.id && props.formdata.pdfDataSheetDisplay !== "" ? <a href={props.formdata.pdfDataSheetDisplay} target="_blank" rel="noopener noreferrer">View Uploaded PDF</a> : '';

  let subcategoryoptions = <option key="0" value="">No subcategory available for selected category</option>;
  if (props.subcategories && props.subcategories.length !== 0) {
    subcategoryoptions = props.subcategories.map(eachSubcat => {
      return (
        <option
          key={eachSubcat.subCatId}
          value={eachSubcat.subCatId}
        >
          {eachSubcat.subCatName}
        </option>
      );
    });
  }

  let brandoptions = null;
  if (props.brands && props.brands.length !== 0) {
    brandoptions = props.brands.map(eachBrand => {
      return (
        <option
          key={eachBrand.brandId}
          value={eachBrand.brandId}
        >
          {eachBrand.brandName}
        </option>
      );
    });
  } else {
    brandoptions = <option value="">Choose Brand</option>;
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
                Select Category <span className="red"> * </span>{" "}
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  name="catName"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.catName}
                >
                  <option value="">Choose Category</option>
                  {categoryoptions}
                </select>
                {props.errors.catName ? (
                  <InlineError text={props.errors.catName} />
                ) : (
                    ""
                  )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">
                Select Sub Category:<span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <select
                  id=""
                  name="subCatId"
                  data-placeholder="Sub Category"
                  className="form-control"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.subCatId}
                >
                  {subcategoryoptions}
                </select>
                {props.errors.subCatId ? (
                  <InlineError text={props.errors.subCatId} />
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
                Series Name <span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="text"
                  placeholder="Series Name"
                  className="form-control"
                  id=""
                  name="seriesName"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.seriesName}
                />
                {props.errors.seriesName ? (
                  <InlineError text={props.errors.seriesName} />
                ) : (
                    ""
                  )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">
                Select Brand:<span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <select
                  id=""
                  name="brandId"
                  data-placeholder="Brand"
                  className="form-control"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.brandId}
                >
                  <option value="">Choose Brand</option>
                  {brandoptions}
                </select>
                {props.errors.brandId ? (
                  <InlineError text={props.errors.brandId} />
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
                Degree <span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="text"
                  placeholder="Degree"
                  className="form-control"
                  id=""
                  name="degree"
                  disabled={props.formdata.catName !== 'Electrolytic Capacitors' ? true : false}
                  onChange={e => props.onChange(e)}
                  value={props.formdata.degree}
                />
                {props.errors.degree ? (
                  <InlineError text={props.errors.degree} />
                ) : (
                    ""
                  )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">
                Load Life <span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="text"
                  placeholder="Load Life"
                  className="form-control"
                  id=""
                  name="loadLife"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.loadLife}
                  disabled={props.formdata.catName !== 'Electrolytic Capacitors' ? true : false}
                />
                {props.errors.loadLife ? (
                  <InlineError text={props.errors.loadLife} />
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
                Low ESR <span className="red">*</span>
              </label>
              <div className="col-sm-1">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="radio"
                  placeholder="lowESR"
                  className="form-control"
                  id=""
                  name="lowESR"
                  onChange={e => props.onChange(e)}
                  value="yes"
                  checked={props.formdata.lowESR === "yes"}
                  disabled={props.formdata.catName !== 'Electrolytic Capacitors' ? true : false}
                />
                {props.errors.lowESR ? (
                  <InlineError text={props.errors.lowESR} />
                ) : (
                    ""
                  )}
              </div>
              <div className="col-sm-3">Yes</div>
              <div className="col-sm-1">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="radio"
                  placeholder="lowESR"
                  className="form-control"
                  id=""
                  name="lowESR"
                  onChange={e => props.onChange(e)}
                  value="no"
                  checked={props.formdata.lowESR === "no"}
                  disabled={props.formdata.catName !== 'Electrolytic Capacitors' ? true : false}
                />
              </div>
              <div className="col-sm-3">No</div>
            </div>

            <div className="form-group">
              <label className="col-sm-4 control-label">
                High Ripple Current <span className="red">*</span>
              </label>
              <div className="col-sm-1">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="radio"
                  placeholder="highRippleCurrent"
                  className="form-control"
                  id=""
                  name="highRippleCurrent"
                  onChange={e => props.onChange(e)}
                  value="yes"
                  checked={props.formdata.highRippleCurrent === "yes"}
                  disabled={props.formdata.catName !== 'Electrolytic Capacitors' ? true : false}
                />
                {props.errors.highRippleCurrent ? (
                  <InlineError text={props.errors.highRippleCurrent} />
                ) : (
                    ""
                  )}
              </div>
              <div className="col-sm-3">Yes</div>
              <div className="col-sm-1">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="radio"
                  placeholder="highRippleCurrent"
                  className="form-control"
                  id=""
                  name="highRippleCurrent"
                  onChange={e => props.onChange(e)}
                  value="no"
                  checked={props.formdata.highRippleCurrent === "no"}
                  disabled={props.formdata.catName !== 'Electrolytic Capacitors' ? true : false}
                />
              </div>
              <div className="col-sm-3">No</div>
            </div>
            <div className="form-group">
              <label className="col-sm-4 control-label">
                PDF Data Sheet <span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <input type="hidden" id="" name="" value="" />
                <input
                  type="file"
                  placeholder="Load Life"
                  className="form-control"
                  id=""
                  accept="application/pdf"
                  name="pdfDataSheet"
                  onChange={e => props.onFileChange(e)}
                  onClick={props.onFileClick}
                />
                {viewUploadedPFD}
                {props.errors.pdfDataSheet ? (
                  <InlineError text={props.errors.pdfDataSheet} />
                ) : (
                    ""
                  )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="col-sm-4 control-label">
                Remark <span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  placeholder="Remark"
                  rows="5"
                  id=""
                  name="remark"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.remark}
                />
                {props.errors.remark ? (
                  <InlineError text={props.errors.remark} />
                ) : (
                    ""
                  )}
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>

        <div className="clearfix" />
        <div className="col-md-12 text-center">
          <input
            type="submit"
            className="btn btn-success"
            value={props.loading ? "Please Wait..." : "Save"}
          />{" "}
          &emsp;
          <NavLink to="/series-list" className="btn btn-default">
            Cancel{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default seriesFrom;
