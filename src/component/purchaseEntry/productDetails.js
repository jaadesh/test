import React from "react";
import aux from "../../hoc/Auxillary";
import { NavLink } from "react-router-dom";

import InlineError from "../../component/Helpers/InlineError";

const productDetails = props => {
  return (
    <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-btns">
            <a
              href=""
              className="panel-minimize tooltips"
              data-toggle="tooltip"
              title=""
              data-original-title="Minimize Panel"
            >
              <i className="fa fa-minus" />
            </a>
          </div>
          <b>Add Purchase</b>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Category<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Electrolytic"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Sub Category<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Polyester And Ceramic"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Value<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="1"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Volt<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="1"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Near By Value<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Value"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Near By Volt<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Volt"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Lead Type<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Lead Type"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Size/Pitch<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Size"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Brand<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Brand Name"
                    className="form-control"
                    disabled
                    id=""
                    name=""
                    value=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="col-sm-4 control-label">
                  Series<span className="red">*</span>
                </label>
                <div className="col-sm-8">
                  <a href="#">Series Link</a>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
  );
}
export default productDetails;