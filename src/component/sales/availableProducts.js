import React from "react";
import ModalPopup from '../Utilities/modalPopup';
import InlineError from "../../component/Helpers/InlineError";

const availableProducts = ({ props }) => {
  let NewAvailableProducts = null;
  let popupBodyNew = [];
  if (props.availableProducts.length !== 0 && Object.keys(props.availableProducts).length > 0) {
    let i = 0;
    NewAvailableProducts = Object.keys(props.availableProducts).map((eachproduct, key) => {
      i++;
      return (
        <tr key={i}>
          <td>{i}</td>
          <td>{props.availableProducts[eachproduct].productName}</td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              name={"requiredQuantity-" + props.availableProducts[eachproduct].productId}
              onChange={e => props.onChange(e, "requiredQuantity")}
              value={props.availableProducts[eachproduct].requiredQuantity}
            />
            {props.errors["requiredQuantity-" + props.availableProducts[eachproduct].productId] ? <InlineError text={props.errors["requiredQuantity-" + props.availableProducts[eachproduct].productId]} /> : ''}
          </td>
          <td>
            <div className="col-md-10">
              <input
                type="text"
                placeholder=""
                className="form-control"
                name={"packageQuantity-" + props.availableProducts[eachproduct].productId}
                onChange={e => props.onChange(e, "packageQuantity")}
                value={props.availableProducts[eachproduct].packageQuantity}
              />
              {props.errors["packageQuantity-" + props.availableProducts[eachproduct].productId] ? <InlineError text={props.errors["packageQuantity-" + props.availableProducts[eachproduct].productId]} /> : ''}
            </div>
            <div className="col-md-2">
              <input type='button' className="menu-collapse btn btn-primary" onClick={(id) => props.showPacking(props.availableProducts[eachproduct].productId)} value="i" />
            </div>
          </td>
          <td>
            <input type='button' className="menu-collapse btn btn-primary" onClick={(id) => props.addProduct(props.availableProducts[eachproduct].productId)} value="+" />
          </td>
        </tr>
      );
    });
  } else {
    NewAvailableProducts =
      <tr>
        <td>No Products available</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>;
  }

  if (props.insideProductData.length) {
    
    for (let i = 0; i < props.insideProductData.length; i++) {
      let popupBody1 = props.insideProductData[i].insidePacking.map((data, key) => {
        return (
          <div key={key}>
            <div className="col-md-3">
              <div className="form-group">
                <label className="col-sm-12 control-label">
                  Date Code<span className="red">*</span>
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    disabled={true}
                    name={"dateCode-" + key}
                    value={data.dateCode}
                  />
                </div>
              </div>
            </div>
            {data.wholesale ?
              <div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label className="col-sm-12 control-label">
                      Total Master Box<span className="red">*</span>
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        disabled={true}
                        name={"totalMasterBox-" + key}
                        value={data.wholesale.totalMasterBox}
                      />
                    </div>
                  </div>
                  {data.wholesale.firstInsideBox ?
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        1st Inside Pack Boxes<span className="red">*</span>
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          disabled={true}
                          name={"totalBox-" + key}
                          value={data.wholesale.firstInsideBox.totalBox}
                        />
                      </div>
                    </div>
                    : null}
                  {data.wholesale.firstInsideBox ? data.wholesale.firstInsideBox.secondInsideBox ?
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        2nd Inside Pack Boxes<span className="red">*</span>
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          disabled={true}
                          name={"totalBox-" + key}
                          value={data.wholesale.firstInsideBox.secondInsideBox.totalBox}
                        />
                      </div>
                    </div>
                    : null : null}
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label className="col-sm-12 control-label">
                      Total No. of Pieces Per Box<span className="red">*</span>
                    </label>
                    <div className="col-sm-12">
                      <input
                        type="text"
                        placeholder=""
                        className="form-control"
                        disabled={true}
                        id=""
                        name={"totalPieces-" + key}
                        value={data.wholesale.totalPieces}
                      />
                    </div>
                  </div>
                  {data.wholesale.firstInsideBox ?
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        1st Inside Pack Boxes Per Pieces<span className="red">*</span>
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          disabled={true}
                          id=""
                          name={"piecePerBox-" + key}
                          value={data.wholesale.firstInsideBox.piecePerBox}
                        />
                      </div>
                    </div>
                    : null}
                  {data.wholesale.firstInsideBox ? data.wholesale.firstInsideBox.secondInsideBox ?
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        2nd Inside Pack Boxes Per Pieces<span className="red">*</span>
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          disabled={true}
                          id=""
                          name={"piecePerBox-" + key}
                          value={data.wholesale.firstInsideBox.secondInsideBox.piecePerBox}
                        />
                      </div>
                    </div>
                    : null : null}
                </div>
              </div>
              : null}
            <div className="clearfix" />
            <hr />
          </div>
        )
      });
      popupBodyNew.push(popupBody1);
    }
  }
  else{
    popupBodyNew = (
      <div className="col-md-12 text-center">
        <h1>No purchase entry available.</h1>
      </div>
    );
  }

  return (

    <div className="col-md-12">
      <ModalPopup isOpen={props.isOpen} modalTitle={props.modalTitle} closeModal={props.closeModal} popupBody={popupBodyNew} />
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">Available Products</h4>
        </div>
        <div className="panel-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className="col-md-1">Sr. No</th>
                <th className="col-md-5">Product</th>
                <th className="col-md-2">Required Quantity</th>
                <th className="col-md-3">As per packing Quantity</th>
                <th className="col-md-1">Add</th>
              </tr>
            </thead>
            <tbody>
              {NewAvailableProducts}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default availableProducts;
