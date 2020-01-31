import React from "react";
import { NavLink } from "react-router-dom";

import CustomerInfo from "./customerInfo";
import SearchProduct from "./searchProduct";
import AvailableProducts from "./availableProducts";
import SelectedProducts from "./selectedProducts";

const quotationForm = props => {
  return (
    <div className="row">
      <div className="col-md-12">
        {props.serverError && props.serverError !== 'No entry available' ? (
          <div className="alert alert-danger">
            <strong>{props.serverError}</strong>
          </div>
        ) : (
            ""
          )}
        <CustomerInfo props={props} />
        <SearchProduct props={props} />
        <AvailableProducts props={props} />
        <SelectedProducts props={props} />
        <div className="col-md-12 text-center">
          <input
            type="submit"
            className="btn btn-success"
            value={props.loading ? "Please Wait..." : "Save"}
          />{" "}
          &emsp;
          <NavLink to="/quotation-list" className="btn btn-default">
            Cancel{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default quotationForm;
