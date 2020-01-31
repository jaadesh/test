import React from "react";
import SelectSearch from 'react-select-search'

import InlineError from "../../component/Helpers/InlineError";

const searchProduct = ({ props }) => {
  let brandOptions = null;
  if (props.brandmaster.length !== 0) {
    brandOptions = Object.keys(props.brandmaster).map(eachBrand => {
      return (
        { name: props.brandmaster[eachBrand].brandname, value: props.brandmaster[eachBrand]._id }
      );
    });
  } else {
    brandOptions = [{ name: 'No Brand Available', value: '' }];
  }
  

  let sizePitchOptions = null;
  if (props.sizePitchMaster.length !== 0) {
    sizePitchOptions = Object.keys(props.sizePitchMaster).map(eachSizePitch => {
      return (
        { name: props.sizePitchMaster[eachSizePitch].spdiameter + (props.sizePitchMaster[eachSizePitch].spheight ? '*' : '') + props.sizePitchMaster[eachSizePitch].spheight  + (props.sizePitchMaster[eachSizePitch].sppitch ? '*' : '') +  props.sizePitchMaster[eachSizePitch].sppitch  + (props.sizePitchMaster[eachSizePitch].spwidth ? '*' :'') +  props.sizePitchMaster[eachSizePitch].spwidth + (props.sizePitchMaster[eachSizePitch].spcatname ? ' ('+ props.sizePitchMaster[eachSizePitch].spcatname + ')' :''), value: props.sizePitchMaster[eachSizePitch]._id }
      );
    });
  } else {
    sizePitchOptions = [{ name: 'No Lead Type Available', value: '' }];
  }

  let leadTypeOptions = null;
  if (props.leadTypeMaster.length !== 0) {
    leadTypeOptions = Object.keys(props.leadTypeMaster).map(eachLeadType => {
      return (
        { name: props.leadTypeMaster[eachLeadType].ltname + (props.leadTypeMaster[eachLeadType].catname ? ' ('+ props.leadTypeMaster[eachLeadType].catname + ')' : ''), value: props.leadTypeMaster[eachLeadType]._id }
      );
    });
  } else {
    leadTypeOptions = [{ name: 'No Lead Type Available', value: '' }];
  }
  

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Search Products</h4>
            </div>
            <div className="panel-body">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Value
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="value"
                          maxLength="10"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.value}
                        />
                        {props.errors.value ? (
                          <InlineError text={props.errors.value} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Volt
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="volt"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.volt}
                        />
                        {props.errors.volt ? (
                          <InlineError text={props.errors.volt} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Brand
                      </label>
                      <div className="col-sm-12">
                        {/* <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="brand"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.brand}
                        /> */}
                        <SelectSearch options={brandOptions} onChange={e => props.onChangeSelect(e,'brand')} value={props.formdata.brand} name="brand" id='brand' placeholder="Choose Brand" />
                        {props.errors.brand ? (
                          <InlineError text={props.errors.brand} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Load Life
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="loadLife"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.loadLife}
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
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Low ESR
                      </label>
                      <div className="col-sm-12">
                        <select
                          className="form-control"
                          name="lowESR"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.lowESR}
                        >
                          <option value=''>Choose ESR</option>
                          <option value={true}>Yes</option>
                          <option value={false}>No</option>
                        </select>
                        {props.errors.lowESR ? (
                          <InlineError text={props.errors.lowESR} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Ripple Current
                      </label>
                      <div className="col-sm-12">
                        <select
                          className="form-control"
                          name="highRippleCurrent"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.highRippleCurrent}
                        >
                          <option value=''>Choose Ripple Current</option>
                          <option value={true}>High</option>
                          <option value={false}>Low</option>
                        </select>
                        {props.errors.highRippleCurrent ? (
                          <InlineError text={props.errors.highRippleCurrent} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Size/Pitch
                      </label>
                      <div className="col-sm-12">
                        {/* <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="sizePitch"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.sizePitch}
                        /> */}
                        <SelectSearch options={sizePitchOptions} onChange={e => props.onChangeSelect(e,'sizePitch')} value={props.formdata.sizePitch} name="sizePitch"  placeholder="Choose Size Pitch" />
                        {props.errors.sizePitch ? (
                          <InlineError text={props.errors.sizePitch} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Lead Type
                      </label>
                      <div className="col-sm-12">
                        {/* <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="leadType"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.leadType}
                        /> */}
                        <SelectSearch options={leadTypeOptions} onChange={e => props.onChangeSelect(e,'leadType')} value={props.formdata.leadType} name="leadType"  placeholder="Choose Lead Type" />
                        {props.errors.leadType ? (
                          <InlineError text={props.errors.leadType} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-3">
                    <div className="form-group">
                      <label className="col-sm-12 control-label">
                        Is FEI?
                      </label>
                      <div className="col-sm-12">
                        <select
                          className="form-control"
                          name="isFEI"
                          onChange={e => props.onChange(e)}
                          value={props.formdata.isFEI}
                        >
                          <option value=''>Choose FEI</option>
                          <option value={true}>Yes</option>
                          <option value={false}>No</option>
                        </select>
                        {props.errors.isFEI ? (
                          <InlineError text={props.errors.isFEI} />
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="col-sm-12 text-right">
                    <input type='button' className="menu-collapse btn btn-primary" onClick={props.searchProduct} value="Search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default searchProduct;
