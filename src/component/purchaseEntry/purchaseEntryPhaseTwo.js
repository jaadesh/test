import React from "react";
// import aux from "../../hoc/Auxillary";
import { NavLink } from "react-router-dom";
// import * as Config from '../../config/config';

import InlineError from "../../component/Helpers/InlineError";

const purchaseEntryPhaseTwo = ({ props }) => {
  let priceRows = '';
  if (props.pricingDetails) {

    priceRows = props.pricingDetails.map((data, key) => {
      return (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{data.pricing[0].start + ' TO ' + data.pricing[0].end}</td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              disabled={true}
              name=""
              onChange={e => props.onChange(e)}
              value={data.pricing[0].price ? data.pricing[0].price : ''}
            />
          </td>
          <td>{data.pricing[1].start + ' TO ' + data.pricing[1].end}</td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              disabled={true}
              name=""
              onChange={e => props.onChange(e)}
              value={data.pricing[1].price ? data.pricing[1].price : ''}
            />
          </td>
          <td>{data.pricing[2] ? data.pricing[2].start + ' To Max' : ''}</td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              disabled={true}
              name=""
              onChange={e => props.onChange(e)}
              value={data.pricing[2] ? data.pricing[2].price : ''}
            />
          </td>
        </tr>
      )
    });
  }
  let imageDiv = '';
  if (props.formdata.productImages) {
    imageDiv = props.formdata.productImages.map((data, key) => {
      return (
        <div className="col-md-4" key={key}><img style={{ width: '100%', height: 'auto' }} src={props.formdata.baseProductpath + data.path} alt={'productImages' + key} /></div>
      )
    });
  }
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <b>Purchase Entry L2</b>
      </div>

      <div className="panel-body">
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">Purchase Price<span className="red">*</span></label>
              <div className="col-sm-8">
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  disabled={props.formdata.currentlevel === 'level2' ? true : false}
                  name="purchasePrice"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.purchasePrice}
                />
                {props.errors.purchasePrice ? <InlineError text={props.errors.purchasePrice} /> : ''}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">Standard Price<span className="red">*</span></label>
              <div className="col-sm-8">
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  disabled={props.formdata.currentlevel === 'level2' ? true : false}
                  name="standardPrice"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.standardPrice || ''}
                />
                {props.errors.standardPrice ? <InlineError text={props.errors.standardPrice} /> : ''}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">&nbsp;</label>
              <div className="col-md-12">
                <label>
                  <input type="checkbox" name="isFEI" onChange={e => props.onChange(e)}
                    checked={props.formdata.isFEI === '1' ? true : false}
                    disabled={props.formdata.currentlevel === 'level2' ? true : false} /> Factory Excess
                  Inventory
                  </label>
              </div>
            </div>
          </div>

          <div className="clearfix" />
          <hr />

          <div className="col-md-12">
            <div className="col-md-12 text-right">
              <label className="col-sm-12 control-label">&nbsp;</label>
              {props.formdata.finalSubmit === "true" ? <input type="submit" className="btn btn-success" value={props.loading ? 'Please Wait...' : 'Save'} disabled={props.formdata.currentlevel === 'level2' ? true : false} /> : ''} &emsp;
              {/* <NavLink to={props.formdata.currentlevel === 'level2' ? '/purchase-list-level2' : '/purchase-list-level1'} className="btn btn-default"  >Cancel </NavLink> */}
              <NavLink to={'/purchase-entry-product-list/'+ props.formdata.purchaseEntryId} className="btn btn-default"> Back </NavLink>
            </div>
          </div>
          <div className="clearfix" />
          <hr />
          <div className="col-md-12">
            <h4><b>Product Images</b></h4>
            <hr />
            {imageDiv}
          </div>
          <div className="clearfix" />
          <hr />
          <div className="col-md-12">
            <div className="col-md-8"><input type="button" className="btn btn-success" value={props.showPriceTable === '' ? 'Hide Price Table' : 'Show Price Table'} onClick={props.toggleTable} /></div>
            <div className="col-md-4 text-right"></div>
            <div className="clearfix" />
            <hr />

            <table
              id="basicTable"
              className={"table table-striped table-bordered responsive " + props.showPriceTable}
            >
              <thead className="">
                <tr>
                  <th>Sr No.</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Standard Price</th>
                </tr>
              </thead>
              <tbody>
                {priceRows}
              </tbody>
            </table>
          </div>



        </div>
      </div>
    </div>
  );
}

export default purchaseEntryPhaseTwo;