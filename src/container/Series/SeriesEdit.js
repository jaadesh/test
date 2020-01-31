import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PageHeader from "../../component/Layout/PageHeader";
import { updateObject } from "../../shared/utility";
import Layout from "../Layout/Layout";
import SeriesForm from "../../component/series/seriesForm";
import { validateSeries } from "../../validations/series";
import * as seriesActions from "../../store/actions/seriesAction";
import * as brandActions from "../../store/actions/brandAction";
import * as Config from "../../config/config";

const validExtension = (fileName, exts) => {
  return new RegExp("(" + exts.join("|").replace(/\./g, "\\.") + ")$").test(
    fileName
  );
};

class SeriesEdit extends Component {
  state = {
    formdata: {
      catName: "",
      subCatId: "",
      seriesName: "",
      brandId: "",
      degree: "",
      loadLife: "",
      lowESR: "",
      highRippleCurrent: "",
      pdfDataSheet: "",
      pdfDataSheetDisplay: "",
      remark: "",
      id: ""
    },
    errors: {},
    subcategorymaster: [],
    brandmaster: []
  };

  componentDidMount() {
    this.props.onGetBrand();
    if (this.props.match.params.id) {
      this.props.onFetchEditData(this.props.match.params.id);
    } else {
      this.props.histroy.push("./series-list");
    }
  }

  componentWillUnmount() {
    this.props.onReset();
  }

  onChangeHandler = e => {
    let formData1 = null;
    if (e.target.name === "catName") {
      this.props.onGetSubCatFromCat(e.target.value);
      const updatedFormData = updateObject(this.state.formdata, {
        subCatId: ""
      });
      this.setState({ formdata: updatedFormData });
      formData1 = { subCatId: "", degree: '', loadLife: '', lowESR: '', highRippleCurrent: ''};
    }
    formData1 = { ...formData1, [e.target.name]: e.target.value }
    const formData = updateObject(this.state.formdata, formData1);
    this.setState({ formdata: formData });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.subcategorymaster !== this.props.subcategorymaster) {
      let subcatmaster = this.props.subcategorymaster
      if (this.props.subcategorymaster) {
        let defaultItem = {
          catName: '',
          subCatId: 0,
          subCatImage: '',
          subCatName: 'Choose One'
        }
        subcatmaster.unshift(defaultItem);
      }
      return this.setState({ subcategorymaster: subcatmaster });
    }
    if (prevProps.brandmaster !== this.props.brandmaster && this.props.brandmaster) {
      return this.setState({ brandmaster: this.props.brandmaster });
    }
    if (prevProps.seriesData !== this.props.seriesData && this.props.seriesData) {
      const newSeriesData = this.props.seriesData;
      let lowESRNew = 'no';
      if (newSeriesData.lowESR && newSeriesData.lowESR === '1') {
        lowESRNew = 'yes'
      }

      let highRippleCurrentNew = 'no';
      if (newSeriesData.highRippleCurrent && newSeriesData.highRippleCurrent === '1') {
        highRippleCurrentNew = 'yes'
      }
      this.props.onGetSubCatFromCat(newSeriesData.catName);
      const formData = updateObject(this.state.formdata, {
        catName: newSeriesData.catName,
        subCatId: newSeriesData.subCatId,
        seriesName: newSeriesData.seriesName,
        brandId: newSeriesData.brandId,
        degree: newSeriesData.degree ? newSeriesData.degree : '',
        loadLife: newSeriesData.loadLife ? newSeriesData.loadLife : '',
        lowESR: lowESRNew ? lowESRNew : '',
        highRippleCurrent: highRippleCurrentNew ? highRippleCurrentNew : '',
        remark: newSeriesData.remarks,
        pdfDataSheetDisplay: newSeriesData.pdfFile
          ? newSeriesData.seriesBasePath + newSeriesData.pdfFile
          : "",
        id: newSeriesData.seriesId
      });
      this.setState({ formdata: formData });
    }
  }

  onFileChangeHandler = event => {
    if (event.target.files && event.target.files[0]) {
      if (validExtension(event.target.files[0].name, [".pdf"])) {
        this.setState({ errors: {} });
        const formData = updateObject(this.state.formdata, {
          [event.target.name]: event.target.files[0],
          displayimage: URL.createObjectURL(event.target.files[0])
        });
        this.setState({ formdata: formData });
      } else {
        const errors = updateObject(this.state.errors, {
          pdfDataSheet: "Invalid file, .pdf file allowed."
        });
        this.setState({ errors: errors });
      }
    }
  };

  onFileClickHandler = () => {
    const formData = updateObject(this.state.formdata, { pdfDataSheet: "" });
    this.setState({ formdata: formData });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const validationResponse = validateSeries(
      this.state.formdata,
      Config.CATEGORY_MASTER
    );
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    } else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  };

  render() {
    let series = (
      <Layout>
        <PageHeader title="Series Edit" />
        <div className="contentpanel">
          <div className="row">
            <form
              encType="multipart/form-data"
              autoComplete="off"
              name="seriesform"
              method="post"
              onSubmit={this.formSubmitHandler}
            >
              <SeriesForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                formdata={this.state.formdata}
                categories={Config.CATEGORY_MASTER}
                subcategories={this.state.subcategorymaster}
                brands={this.state.brandmaster}
                serverError={this.props.error}
                loading={this.props.loading}
                onFileChange={this.onFileChangeHandler}
                onFileClick={this.onFileClickHandler}
              />
            </form>
          </div>
        </div>
      </Layout>
    );
    if (this.props.response) {
      const path = "/series-list/" + encodeURI(this.props.response);
      series = <Redirect to={path} />;
    }
    return series;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchEditData: id => dispatch(seriesActions.seriesFetchEditStart(id)),
    onSubmit: formdata => dispatch(seriesActions.seriesEditStart(formdata)),
    onReset: () => dispatch(seriesActions.seriesReset()),
    onGetBrand: () => dispatch(brandActions.getBrandStart()),
    onGetSubCatFromCat: catName => dispatch(seriesActions.getSubcatFromCatStart(catName))
  };
};

const mapStateToProps = state => {
  return {
    error: state.Series.error,
    loading: state.Series.loading,
    response: state.Series.response,
    seriesData: state.Series.seriesData,
    subcategorymaster: state.Series.subcategorymaster,
    brandmaster: state.Brand.brandData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesEdit);
