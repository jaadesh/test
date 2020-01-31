import React from "react";

import InlineError from "../../component/Helpers/InlineError";

const selectedProducts = ({ props }) => {
  let SelectedProducts = null;
  if (props.selectedProducts.length !== 0 && Object.keys(props.selectedProducts).length > 0) {
    let i = 0;
    SelectedProducts = Object.keys(props.selectedProducts).map((eachproduct, key) => {
      i++;
      return (
        <tr key={i}>
          <td>{i}</td>
          <td>{props.selectedProducts[eachproduct].selectedProductName}</td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              name={"selectedRequiredQuantity-" + props.selectedProducts[eachproduct].selectedProductId}
              onChange={e => props.onChange(e, "selectedRequiredQuantity")}
              value={props.selectedProducts[eachproduct].selectedRequiredQuantity}
            />
            {props.errors["selectedRequiredQuantity-" + props.selectedProducts[eachproduct].selectedProductId] ? <InlineError text={props.errors["selectedRequiredQuantity-" + props.selectedProducts[eachproduct].selectedProductId]} /> : ''}
          </td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              name={"selectedPackageQuantity-" + props.selectedProducts[eachproduct].selectedProductId}
              onChange={e => props.onChange(e, "selectedPackageQuantity")}
              value={props.selectedProducts[eachproduct].selectedPackageQuantity}
            />
            {props.errors["selectedPackageQuantity-" + props.selectedProducts[eachproduct].selectedProductId] ? <InlineError text={props.errors["selectedPackageQuantity-" + props.selectedProducts[eachproduct].selectedProductId]} /> : ''}
          </td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              name={"selectedAmount-" + props.selectedProducts[eachproduct].selectedProductId}
              onChange={e => props.onChange(e, "selectedAmount")}
              value={props.selectedProducts[eachproduct].selectedAmount}
            />
            {props.errors["selectedAmount-" + props.selectedProducts[eachproduct].selectedProductId] ? <InlineError text={props.errors["selectedAmount-" + props.selectedProducts[eachproduct].selectedProductId]} /> : ''}
          </td>
          <td>{props.selectedProducts[eachproduct].selectedSum}</td>
          <td>
            <input type='button' className="menu-collapse btn btn-danger" onClick={(id) => props.removeProduct(props.selectedProducts[eachproduct].selectedProductId)} value="X" />
          </td>
        </tr>
      );
    });
  } else {
    SelectedProducts =
      <tr>
        <td>{props.errors.isSelected ? (<InlineError text={props.errors.isSelected} />) : ("No Product Selected")}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>;
  }

  return (
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">Selected Products</h4>
        </div>
        <div className="panel-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="col-md-1">Sr. No</th>
                <th className="col-md-4">Product</th>
                <th className="col-md-2">Required Quantity</th>
                <th className="col-md-2">As per packing Quantity</th>
                <th className="col-md-2">Amount</th>
                <th className="col-md-2">Total</th>
                <th className="col-md-1">Remove</th>
              </tr>
            </thead>
            <tbody>
              {SelectedProducts}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default selectedProducts;
