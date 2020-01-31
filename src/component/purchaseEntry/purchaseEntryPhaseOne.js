import React from "react";
import InlineError from "../../component/Helpers/InlineError";
import { LOCATION_MASTER } from '../../config/config';
import ModalPopup from '../Utilities/modalPopup';

const purchaseEntryPhaseOne = ({ props }) => {
  let locationoptions = null;
  if (LOCATION_MASTER) {
    locationoptions = LOCATION_MASTER.map(eachLocation => (
      <option key={eachLocation} value={eachLocation === 'Lamington' ? '1' : '2'}>
        {eachLocation}
      </option>
    ));
  }
  let rackoptions = null;
  rackoptions = props.rackMaster ? props.rackMaster.map((eachRack, key) => {

    if (eachRack.location_id === parseInt(props.formdata.location)) {
      let a = eachRack.racks.map((rackVal, i) => {
        return (
          <option key={i} value={rackVal.name}>
            {rackVal.name}
          </option>
        )
      })
      return a;
    }

    return null;
  }) : '';

  let popupBodyNew = (
    <div>
      <iframe id="ifmcontentstoprint" title='ifmcontentstoprint' style={{ height: '0px', width: '0px', position: 'absolute' }}></iframe>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Barcode</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.popupBody}
        </tbody>
      </table>
    </div>
  );

  let testRows = null;
  let insidePacking = null;
  if (props.formdata.testReport) {

    testRows = props.formdata.testReport.map((data, key) => {
      return (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              disabled={true}
              name={"value-" + data.id}
              onChange={e => props.onChange(e, 'value')}
              value={data.value ? data.value : ''}
            />
            {props.errors["value-" + data.id] ? <InlineError text={props.errors["value-" + data.id]} /> : ''}
          </td>
          <td>
            <input
              type="text"
              placeholder=""
              className="form-control"
              disabled={true}
              name={"volt-" + data.id}
              onChange={e => props.onChange(e, 'volt')}
              value={data.volt ? data.volt : ''}
            />
            {props.errors["volt-" + data.id] ? <InlineError text={props.errors["volt-" + data.id]} /> : ''}
          </td>
        </tr>
      )
    });

    insidePacking = props.formdata.insidePacking.map((data, key) => (
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
                disabled={props.formdata.currentlevel === 'level2' ? true : false}
                name={"dateCode-" + key}
                onChange={e => props.onChange(e, 'dateCode')}
                value={data.dateCode}
              />
              {props.errors["dateCode-" + key] ? <InlineError text={props.errors["dateCode-" + key]} /> : ''}
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
                    disabled={props.formdata.currentlevel === 'level2' ? true : false}
                    name={"totalMasterBox-" + key}
                    onChange={e => props.onChange(e, 'totalMasterBox')}
                    value={data.wholesale.totalMasterBox}
                  />
                  {props.errors["totalMasterBox-" + key] ? <InlineError text={props.errors["totalMasterBox-" + key]} /> : ''}
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
                      disabled={props.formdata.currentlevel === 'level2' ? true : false}
                      name={"totalBox-" + key}
                      onChange={e => props.onChange(e, 'firsttotalBox')}
                      value={data.wholesale.firstInsideBox.totalBox}
                    />
                    {props.errors["totalBox-" + key] ? props.position.value === 'first' ? <InlineError text={props.errors["totalBox-" + key]} /> : '' : ''}
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
                      disabled={props.formdata.currentlevel === 'level2' ? true : false}
                      name={"totalBox-" + key}
                      onChange={e => props.onChange(e, 'secondtotalBox')}
                      value={data.wholesale.firstInsideBox.secondInsideBox.totalBox}
                    />
                    {props.errors["totalBox-" + key] ? props.position.value === 'second' ? <InlineError text={props.errors["totalBox-" + key]} /> : '' : ''}
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
                    disabled={props.formdata.currentlevel === 'level2' ? true : false}
                    id=""
                    name={"totalPieces-" + key}
                    onChange={e => props.onChange(e, 'totalPieces')}
                    value={data.wholesale.totalPieces}
                  />
                  {props.errors["totalPieces-" + key] ? <InlineError text={props.errors["totalPieces-" + key]} /> : ''}
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
                      disabled={props.formdata.currentlevel === 'level2' ? true : false}
                      id=""
                      name={"piecePerBox-" + key}
                      onChange={e => props.onChange(e, 'firstpiecePerBox')}
                      value={data.wholesale.firstInsideBox.piecePerBox}
                    />
                    {props.errors["piecePerBox-" + key] ? props.position.value === 'first' ? <InlineError text={props.errors["piecePerBox-" + key]} /> : '' : ''}
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
                      disabled={props.formdata.currentlevel === 'level2' ? true : false}
                      id=""
                      name={"piecePerBox-" + key}
                      onChange={e => props.onChange(e, 'secondpiecePerBox')}
                      value={data.wholesale.firstInsideBox.secondInsideBox.piecePerBox}
                    />
                    {props.errors["piecePerBox-" + key] ? props.position.value === 'second' ? <InlineError text={props.errors["piecePerBox-" + key]} /> : '' : ''}
                  </div>
                </div>
                : null : null}
            </div>
            {props.formdata.currentlevel === 'level1' ?
              <div className="col-md-2">
                <div className="form-group">
                  <label className="col-sm-12 control-label">
                    Master barcode
              </label>
                  <div className="col-sm-12">
                    {
                      props.formdata.isUpdated === '1' ?

                        <input type="button" onClick={() => props.onPrintClick(data.wholesale.barcode)}
                          value="Print"
                          className="btn btn-success"
                        />
                        :
                        <input type="checkbox" onChange={e => props.onChange(e)}
                          checked={true}
                          disabled={true} />
                    }
                  </div>
                </div>
                {data.wholesale.firstInsideBox ?
                  <div className="form-group">
                    <label className="col-sm-12 control-label">
                      1st packing barcode
              </label>
                    <div className="col-sm-12">
                      {
                        data.wholesale.firstInsideBox.barcode && data.wholesale.firstInsideBox.generateBarcode === 'true' && props.formdata.isUpdated === '1' ?
                          <input type="button" onClick={() => props.onPrintClick(data.wholesale.firstInsideBox.barcode)}
                            value="Print"
                            className="btn btn-success"
                          />
                          :
                          <input type="checkbox" name={"generateBarcode-" + key} onChange={e => props.onChange(e, 'firstgenerateBarcode')}
                            checked={data.wholesale.firstInsideBox.generateBarcode === 'true' ? true : false}
                            disabled={props.formdata.currentlevel === 'level2' ? true : false} />
                      }
                    </div>
                  </div>
                  : null}
                {data.wholesale.firstInsideBox ? data.wholesale.firstInsideBox.secondInsideBox ?
                  <div className="form-group">
                    <label className="col-sm-12 control-label">
                      2nd packing barcode
              </label>
                    <div className="col-sm-12">
                      {data.wholesale.firstInsideBox.secondInsideBox.barcode && data.wholesale.firstInsideBox.secondInsideBox.generateBarcode === 'true' && props.formdata.isUpdated === '1' ?
                        <input type="button" onClick={() => props.onPrintClick(data.wholesale.firstInsideBox.secondInsideBox.barcode)}
                          value="Print"
                          className="btn btn-success"
                        />
                        :
                        <input type="checkbox" name={"generateBarcode-" + key} onChange={e => props.onChange(e, 'secondgenerateBarcode')}
                          checked={data.wholesale.firstInsideBox.secondInsideBox.generateBarcode === 'true' ? true : false}
                          disabled={props.formdata.currentlevel === 'level2' ? true : false} />
                      }
                    </div>
                  </div>
                  : null : null}
              </div>
              :
              <div className="col-md-2">
                <div className="form-group">
                  <label className="col-sm-12 control-label">
                    Master barcode
              </label>
                  <div className="col-sm-12">
                    <input type="button" onClick={() => props.onPrintClick(data.wholesale.barcode)}
                      value="Print"
                      className="btn btn-success"
                    />
                  </div>
                </div>
                {data.wholesale.firstInsideBox ?
                  <div className="form-group">
                    <label className="col-sm-12 control-label"> 1st packing barcode</label>
                    <div className="col-sm-12">
                      <input type="button" disabled = {data.wholesale.firstInsideBox.barcode && data.wholesale.firstInsideBox.generateBarcode === 'true' && props.formdata.isUpdated === '1' ? false :true } onClick={() => props.onPrintClick(data.wholesale.firstInsideBox.barcode)}
                        value="Print"
                        className="btn btn-success"
                      />
                    </div>
                  </div>
                  : null}
                {data.wholesale.firstInsideBox ? data.wholesale.firstInsideBox.secondInsideBox ?
                  <div className="form-group">
                    <label className="col-sm-12 control-label">
                      2nd packing barcode
              </label>
                    <div className="col-sm-12">
                      <input type="button" disabled={data.wholesale.firstInsideBox.secondInsideBox.barcode && data.wholesale.firstInsideBox.secondInsideBox.generateBarcode === 'true' && props.formdata.isUpdated === '1' ? false : true } onClick={() => props.onPrintClick(data.wholesale.firstInsideBox.secondInsideBox.barcode)}
                        value="Print"
                        className="btn btn-success"
                      />
                    </div>
                  </div>
                  : null : null}
              </div>
            }
          </div>
          : null}

        <div className="clearfix" />
      </div>

    ));

  }

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="panel-btns">

        </div>
        <b>Purchase Entry L1</b>
      </div>

      <div className="panel-body">

        <ModalPopup isOpen={props.isOpen} modalTitle={props.modalTitle} closeModal={props.closeModal} popupBody={popupBodyNew} />
        <div className="row">
          {props.serverError ? <div className="alert alert-danger"><strong>{props.serverError}</strong></div> : ''}
          <h4><b>Test Reports</b></h4>
          <hr />
          <table
            id="basicTable"
            className="table table-striped table-bordered responsive"
          >
            <thead className="">
              <tr>
                <th>Sr No.</th>
                <th>Value</th>
                <th>Volt</th>
              </tr>
            </thead>
            <tbody>
              {testRows}
            </tbody>
          </table>
        </div>

        <div className="row">
          <h4>
            <b>Inside Packing</b>
          </h4>
          {insidePacking}
          <hr />

          <h4>
            <b>Weight And Storage</b>
          </h4>

          <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">
                Weight Per Piece<span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  disabled={props.formdata ? props.formdata.currentlevel === 'level2' ? true : false : ''}
                  name="weight"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.weight}
                />
                {props.errors.weight ? <InlineError text={props.errors.weight} /> : ''}
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label className="col-sm-12 control-label">
                Location<span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  name="location"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.location}
                  disabled={props.formdata ? props.formdata.currentlevel === 'level2' ? true : false : ''}
                >
                  <option value="">Choose Location</option>
                  {locationoptions}
                </select>
                {props.errors.location ? <InlineError text={props.errors.location} /> : ''}
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="form-group">
              <label className="col-sm-12 control-label">
                Rack<span className="red">*</span>
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  name="rackNo"
                  onChange={e => props.onChange(e)}
                  value={props.formdata.rackNo}
                  disabled={props.formdata ? props.formdata.currentlevel === 'level2' ? true : false : ''}
                >
                  <option value="">Choose Rack</option>
                  {rackoptions ? rackoptions : null}
                </select>
                {props.errors.rackNo ? <InlineError text={props.errors.rackNo} /> : ''}
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <hr />
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
}

export default purchaseEntryPhaseOne;