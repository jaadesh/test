import React from "react";
import { NavLink } from "react-router-dom";
// import SelectSearch from 'react-select-search';

import InlineError from "../../component/Helpers/InlineError";

const productFrom = props => {
	if (props.masterList) {
		if (Object.keys(props.masterList).length > 0) {
			props.masterList.valueList.forEach((eachvalue, key) => {
				if (eachvalue.value === props.formdata.value) {
					props.formdata.codeId = eachvalue._id;
					props.formdata.unit = eachvalue.unit;
				}
			})
		}
	}

	let categoryoptions = null;
	if (props.categories.length !== 0) {
		categoryoptions = props.categories.map(eachCat => (
			<option key={eachCat} value={eachCat}>
				{eachCat}
			</option>
		));
	}
	else {
		categoryoptions = <option value="">Choose Series First</option>;
	}

	let displayimageArr = null;
	if (props.formdata.displayimage) {
		displayimageArr = props.formdata.displayimage.map((eachImg, key) => (
			<div className="col-md-3" key={key}>
				<img src={eachImg} style={{ width: '100%', height: 'auto' }} className="img-responsive" alt={"Product-" + key} />
			</div>
		));
	}

	let productimageArr = null;
	if (props.formdata.uploadedproductimage) {
		productimageArr = props.formdata.uploadedproductimage.map((eachImg, key) => (
			<div className="col-md-3" key={key}>
				<div className="col-md-12"><input type="button" onClick={() => props.RemoveImage(props.formdata.id, eachImg)} className="btn btn-danger" value="Remove" /></div>
				<div className="col-md-12">	<img src={props.baseProductpath ? props.baseProductpath + eachImg : eachImg} style={{ width: '100%', height: 'auto' }} className="img-responsive" alt={"ProductImages-" + key} /></div>
			</div>
		));
	}

	// let subcategoryoptions = null;
	// const defaultobj = { _id: "", subcatname: "Choose Subcategory" };
	// if (props.subcategories.length !== 0) {
	// 	const found = props.subcategories.some(
	// 		el => el.subcatname === "Choose Subcategory"
	// 	);
	// 	if (!found) props.subcategories.push(defaultobj);
	// 	subcategoryoptions = Object.keys(props.subcategories).map(eachSubcat => {
	// 		return (
	// 			<option
	// 				key={props.subcategories[eachSubcat]._id}
	// 				value={props.subcategories[eachSubcat]._id}
	// 			>
	// 				{props.subcategories[eachSubcat].subcatname}
	// 			</option>
	// 		);
	// 	});
	// } else {
	// 	subcategoryoptions = (
	// 		<option value="">No subcategory available for selected category</option>
	// 	);
	// }

	let subcategoryoptions = null;
	if (props.subcategories.length !== 0) {
		subcategoryoptions = Object.keys(props.subcategories).map(eachSubcat => {
			return (
				<option
					key={props.subcategories[eachSubcat]._id}
					value={props.subcategories[eachSubcat]._id}
				>
					{props.subcategories[eachSubcat].subcatname}
				</option>
			);
		});
	} else {
		subcategoryoptions = <option value="">Choose Series First</option>;
	}


	let brandoptions = null;
	if (props.brands.length !== 0) {
		brandoptions = Object.keys(props.brands).map(eachBrand => {
			return (
				<option
					key={props.brands[eachBrand]._id}
					value={props.brands[eachBrand]._id}
				>
					{props.brands[eachBrand].brandname}
				</option>
			);
		});
	} else {
		brandoptions = <option value="">Choose Series First</option>;
	}


	let leadTypeoptions = null;
	if (props.leadTypes.length !== 0) {
		leadTypeoptions = Object.keys(props.leadTypes).map(eachLeadType => {
			return (
				<option
					key={props.leadTypes[eachLeadType]._id}
					value={props.leadTypes[eachLeadType]._id}
				>
					{props.leadTypes[eachLeadType].ltname}
				</option>
			);
		});
	} else {
		leadTypeoptions = <option value="">Choose Lead Type</option>;
	}


	let sizepitchoptions = null;
	if (props.sizepitch.length !== 0) {
		sizepitchoptions = Object.keys(props.sizepitch).map(eachSizePitch => {
			return (
				<option
					key={props.sizepitch[eachSizePitch]._id}
					value={props.sizepitch[eachSizePitch]._id}
				>
					{props.sizepitch[eachSizePitch].spdiameter} * {props.sizepitch[eachSizePitch].spheight} * {props.sizepitch[eachSizePitch].sppitch} * {props.sizepitch[eachSizePitch].spwidth}
				</option>
			);
		});
	} else {
		sizepitchoptions = <option value="">Choose Size Pitch</option>;
	}


	let seriesoptions = null;
	if (props.series.length !== 0) {
		seriesoptions = Object.keys(props.series).map(eachseries => {
			return (
				<option
					key={props.series[eachseries]._id}
					value={props.series[eachseries]._id}
				>
					{props.series[eachseries].seriesName + ' ('+ props.series[eachseries].brandDetails.brandname + ') '}
				</option>
			);
		});
	} else {
		seriesoptions = <option value="">Choose Series</option>;
	}


	let valueoptions = null;
	if (props.value.length !== 0) {
		valueoptions = Object.keys(props.value).map(eachValue => {
			return (
				<option
					key={props.value[eachValue]._id}
					value={props.value[eachValue]._id}
				>
					{props.value[eachValue].code}
				</option>
			);
		});
	} else {
		valueoptions = <option value="">Choose Value</option>;
	}


	// let options = null;
	// if (props.series.length !== 0) {
	// 	options = Object.keys(props.series).map(eachseries => {
	// 		return (
	// 			{name: props.series[eachseries].seriesName + ' ('+ props.series[eachseries].brandDetails.brandname + ') ', value: props.series[eachseries]._id}
	// 		);
	// 	});
	// } else {
	// 	options = [{name: 'No Series Available', value: ''}];
	// }


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
								Select Series:<span className="red">*</span>
							</label>
							<div className="col-sm-8">
							{/* <SelectSearch options={options} value={props.formdata.seriesId}  name="language" placeholder="Choose your Series" /> */}
								<select
									id=""
									name="seriesId"
									data-placeholder="Series"
									className="form-control"
									onChange={e => props.onChange(e)}
									value={props.formdata.seriesId}
								>
									<option value="">Choose Series</option>
									{seriesoptions}
								</select>
								{props.errors.seriesId ? (
									<InlineError text={props.errors.seriesId} />
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
									disabled={true}
								>
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
								Select Category <span className="red"> * </span>{" "}
							</label>
							<div className="col-sm-8">
								<select
									className="form-control"
									name="catName"
									onChange={e => props.onChange(e)}
									value={props.formdata.catName}
									disabled={true}
								>
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
									name="subcatId"
									data-placeholder="Sub Category"
									className="form-control"
									onChange={e => props.onChange(e)}
									value={props.formdata.subcatId}
									disabled={true}
								>
									{subcategoryoptions}
								</select>
								{props.errors.subcatId ? (
									<InlineError text={props.errors.subcatId} />
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
								Select Lead Type:<span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<select
									id=""
									name="leadtypeId"
									data-placeholder="Lead Type"
									className="form-control"
									onChange={e => props.onChange(e)}
									value={props.formdata.leadtypeId}
								>
									<option value="">Choose Lead Type</option>
									{leadTypeoptions}
								</select>
								{props.errors.leadtypeId ? (
									<InlineError text={props.errors.leadtypeId} />
								) : (
										""
									)}
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label className="col-sm-4 control-label">
								Select Size Pitch:<span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<select
									id=""
									name="sizepitchId"
									data-placeholder="Size Pitch"
									className="form-control"
									onChange={e => props.onChange(e)}
									value={props.formdata.sizepitchId}
								>
									<option value="">Choose Size Pitch</option>
									{sizepitchoptions}
								</select>
								{props.errors.sizepitchId ? (
									<InlineError text={props.errors.sizepitchId} />
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
								Select Code:<span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<select
									id=""
									name="codeId"
									data-placeholder="Code"
									className="form-control"
									onChange={e => props.onChange(e)}
									value={props.formdata.codeId}
								>
									<option value="">Choose Code</option>
									{valueoptions}
								</select>
								{props.errors.codeId ? (
									<InlineError text={props.errors.codeId} />
								) : (
										""
									)}
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label className="col-sm-4 control-label">
								Value <span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<input
									type="text"
									placeholder="Value"
									className="form-control"
									id=""
									name="value"
									onChange={e => props.onChange(e)}
									value={props.formdata.value}
									disabled="disabled"
								/>
								{props.errors.value ? (
									<InlineError text={props.errors.value} />
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
								Unit <span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<input
									type="text"
									placeholder="Unit"
									className="form-control"
									id=""
									name="unit"
									onChange={e => props.onChange(e)}
									value={props.formdata.unit}
									disabled="disabled"
								/>
								{props.errors.unit ? (
									<InlineError text={props.errors.unit} />
								) : (
										""
									)}
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<label className="col-sm-4 control-label">
								Nearby Value <span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<input
									type="text"
									placeholder="Nearby Value"
									className="form-control"
									id=""
									name="nearbyvalue"
									onChange={e => props.onChange(e)}
									value={props.formdata.nearbyvalue}
								/>
								{props.errors.nearbyvalue ? (
									<InlineError text={props.errors.nearbyvalue} />
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
								Volt <span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<input
									type="text"
									placeholder="Volt"
									className="form-control"
									id=""
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
					<div className="col-md-6">
						<div className="form-group">
							<label className="col-sm-4 control-label">
								Nearby Volt <span className="red">*</span>
							</label>
							<div className="col-sm-8">
								<input
									type="text"
									placeholder="Nearby Volt"
									className="form-control"
									id=""
									name="nearbyvolt"
									onChange={e => props.onChange(e)}
									value={props.formdata.nearbyvolt}
								/>
								{props.errors.nearbyvolt ? (
									<InlineError text={props.errors.nearbyvolt} />
								) : (
										""
									)}
							</div>
						</div>
					</div>
					<div className="clearfix" />
					<div className="col-md-6">
						<div className="form-group">
							<label className="col-sm-4 control-label">Product Image<span className="red"> * </span> </label>
							<div className="col-sm-8">
								<input type="file" placeholder="Choose One" className="form-control" name="productimages" onChange={(e) => props.onFileChange(e)} onClick={(e) => props.onFileClick(e)} multiple="multiple" />
								{props.errors.productimages ? <InlineError text={props.errors.productimages} /> : ''}
							</div>
						</div>
					</div>
					<div className="clearfix" />

					{displayimageArr}
					<div className="clearfix" />
					<br />
					<h4><b>Product Images</b></h4>
					<hr />
					{productimageArr}
					<div className="clearfix" />
					<br />
				</div>

				<div className="clearfix" />
				<div className="col-md-12 text-center">
					<input
						type="submit"
						className="btn btn-success"
						value={props.loading ? "Please Wait..." : "Save"}
					/>{" "}
					&emsp;
					<NavLink to="/product-list" className="btn btn-default">
						Cancel{" "}
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default productFrom;
