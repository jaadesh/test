import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Barcode from 'react-barcode';

import PageHeader from '../../component/Layout/PageHeader';
import { updateObject } from '../../shared/utility';
import Layout from '../Layout/Layout';
import PurchaseEntryForm from '../../component/purchaseEntry/purchaseEntryForm';
import { validatePurchaseEntry } from '../../validations/purchaseEntry';
import * as purchaseEntryAction from '../../store/actions/purchaseEntryAction';
import * as rackActions from '../../store/actions/rackAction';
var Barcode = require('react-barcode');
// const validExtension = (fileName, exts) => {
//   return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
// }

class PurchaseEntryAdd extends Component {

  state = {
    formdata: {
      purchaseEntryId: '',
      currentlevel: '',
      productId: '',
      weight: '',
      location: '',
      rackNo: '',
      purchasePrice: '',
      standardPrice: '',
      isFEI: '0',
      testReport: [],
      productImages: [],
      baseProductpath: '',
      insidePacking: [
        {
          "wholesale": {
            "firstInsideBox": {
              "secondInsideBox": {
                "id": '',
                "totalBox": '',
                "piecePerBox": '',
                "generateBarcode": ''
              },
              "id": '',
              "totalBox": '',
              "piecePerBox": '',
              "generateBarcode": ''
            },
            "id": '',
            "totalMasterBox": '',
            "totalPieces": ''
          },
          "dateCode": ""
        }
      ]
    },
    errors: {},
    position: {},
    rackMaster: '',
    isOpen: false,
    popupBody: null,
    modalTitle: 'Print Barcode',
    showPriceTable: 'hidden'
  }

  componentDidMount() {
    if (this.props.match.params.entryId && this.props.match.params.productId) {
      this.props.onGetPurchaseEntry(this.props.match.params.entryId, this.props.match.params.productId);
      this.props.onGetRack();
      this.props.onGetPriceList();
    }
    else {
      this.props.histroy.push("./purchase-list-level1");
    }
  }

  componentWillUnmount() {
    this.props.onReset();
    this.props.onRackReset();
  }

  onChangeHandler = (e, type) => {
    if (e.target.name === "isFEI") {

      const oldFormdata = this.state.formdata;

      const formData = updateObject(this.state.formdata, { isFEI: oldFormdata.isFEI === '1' ? '0' : '1' });
      this.setState({ formdata: formData });
    }
    else {
      if (e.target.name === "location") {
        this.props.onGetRack();
      }
      if (type === 'value') {
        let id = e.target.name.substr(6);
        this.state.formdata.testReport.filter(obj => {
          if (obj.id === id) {
            return obj.value = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'volt') {
        let id = e.target.name.substr(5);
        this.state.formdata.testReport.filter(obj => {
          if (obj.id === id) {
            obj.volt = e.target.value
          }
          return 0;
        });
      }

      if (type === 'dateCode') {
        let id = e.target.name.substr(9);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.dateCode = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'totalMasterBox') {
        let id = e.target.name.substr(15);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.totalMasterBox = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'totalPieces') {
        let id = e.target.name.substr(12);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.totalPieces = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'firsttotalBox') {
        let id = e.target.name.substr(9);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.firstInsideBox.totalBox = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'secondtotalBox') {
        let id = e.target.name.substr(9);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.firstInsideBox.secondInsideBox.totalBox = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'firstpiecePerBox') {
        let id = e.target.name.substr(12);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.firstInsideBox.piecePerBox = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'secondpiecePerBox') {
        let id = e.target.name.substr(12);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.firstInsideBox.secondInsideBox.piecePerBox = e.target.value
          }
          return 0;
        });
      }
      else if (type === 'firstgenerateBarcode') {
        let id = e.target.name.substr(16);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.firstInsideBox.generateBarcode = this.state.formdata.insidePacking[id].wholesale.firstInsideBox.generateBarcode === 'true' ? 'false' : 'true'
          }
          return 0;
        });
      }
      else if (type === 'secondgenerateBarcode') {
        let id = e.target.name.substr(16);
        this.state.formdata.insidePacking.filter(obj => {
          if (obj.id === parseInt(id)) {
            obj.wholesale.firstInsideBox.secondInsideBox.generateBarcode = this.state.formdata.insidePacking[id].wholesale.firstInsideBox.secondInsideBox.generateBarcode === 'true' ? 'false' : 'true'
          }
          return 0;
        });
      }



      const formData = updateObject(this.state.formdata, { [e.target.name]: e.target.value });
      this.setState({ formdata: formData });
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rackMaster !== this.props.rackMaster && this.props.rackMaster) {
      return this.setState({ rackMaster: this.props.rackMaster });
    }
    if (prevProps.purchaseEntryData !== this.props.purchaseEntryData && this.props.purchaseEntryData) {

      const newpurchaseEntryData = this.props.purchaseEntryData;
      let testReport = newpurchaseEntryData[0].productDetails[0].testReport;
      //let blankArray = [{ _id: "1", value: "", volt: '' }, { _id: "2", value: "", volt: '' }, { _id: "3", value: "", volt: '' }, { _id: "4", value: "", volt: '' }, { _id: "5", value: "", volt: '' }];
      //let blankArray1 = blankArray.slice(newpurchaseEntryData[0].productDetails[0].testReport.length, 5);
      // var testReportFinal = [...testReport, ...blankArray1];
      var testReportFinal = testReport;

      var i;
      for (i = 0; i < testReportFinal.length; i++) {
        testReportFinal[i].id = testReportFinal[i]['_id'];
        delete testReportFinal[i]._id;
      }
      const finalinsidePacking = [];
      newpurchaseEntryData[0].productDetails[0].insidePacking.map((eachInsidePacking, key) => {
        let newinsidePacking = {}

        newinsidePacking.dateCode = eachInsidePacking.dateCode ? eachInsidePacking.dateCode : '';

        newinsidePacking.id = eachInsidePacking.dateCode ? key : '';

        newinsidePacking.wholesale = eachInsidePacking.wholesale ? {} : {};

        newinsidePacking.wholesale.totalMasterBox = eachInsidePacking.wholesale ? eachInsidePacking.wholesale.totalMasterBox : '';

        newinsidePacking.wholesale.id = eachInsidePacking.wholesale ? key : '';

        newinsidePacking.wholesale.totalPieces = eachInsidePacking.wholesale ? eachInsidePacking.wholesale.totalPieces : '';

        newinsidePacking.wholesale.firstInsideBox = eachInsidePacking.wholesale.firstInsideBox ? {} : {};

        newinsidePacking.wholesale.barcode = eachInsidePacking.wholesale.barcode ? eachInsidePacking.wholesale.barcode : {};

        newinsidePacking.wholesale.firstInsideBox.totalBox = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.totalBox : '';

        newinsidePacking.wholesale.firstInsideBox.barcode = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.barcode : '';

        newinsidePacking.wholesale.firstInsideBox.generateBarcode = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.barcode ? "true" : "false" : "false";

        newinsidePacking.wholesale.firstInsideBox.id = eachInsidePacking.wholesale.firstInsideBox ? key : '';

        newinsidePacking.wholesale.firstInsideBox.piecePerBox = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.piecePerBox : '';

        newinsidePacking.wholesale.firstInsideBox.secondInsideBox = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox ? {} : {} : {};

        newinsidePacking.wholesale.firstInsideBox.secondInsideBox.totalBox = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox.totalBox : '' : '';

        newinsidePacking.wholesale.firstInsideBox.secondInsideBox.barcode = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox.barcode : '' : '';

        newinsidePacking.wholesale.firstInsideBox.secondInsideBox.generateBarcode = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox.barcode ? "true" : "false" : "false" : "false";


        newinsidePacking.wholesale.firstInsideBox.secondInsideBox.id = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox ? key : '' : '';

        newinsidePacking.wholesale.firstInsideBox.secondInsideBox.piecePerBox = eachInsidePacking.wholesale.firstInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox.piecePerBox : '' : '';

        if (newinsidePacking.wholesale.firstInsideBox.id === '') {
          delete newinsidePacking.wholesale.firstInsideBox.secondInsideBox
          delete newinsidePacking.wholesale.firstInsideBox;
        }
        else {
          if (newinsidePacking.wholesale.firstInsideBox.id !== '') {
            if (newinsidePacking.wholesale.firstInsideBox.secondInsideBox.id === '') {
              delete newinsidePacking.wholesale.firstInsideBox.secondInsideBox
            }
          }
        }

        return finalinsidePacking.push(newinsidePacking);

      })


      const formData = updateObject(this.state.formdata, {
        purchaseEntryId: newpurchaseEntryData[0]._id,
        currentlevel: newpurchaseEntryData[0].currentlevel,
        finalSubmit: newpurchaseEntryData[0].finalSubmit,
        productId: newpurchaseEntryData[0].productDetails[0].pId,
        weight: newpurchaseEntryData[0].productDetails[0].weightPerPiece,
        location: newpurchaseEntryData[0].productDetails[0].location,
        rackNo: newpurchaseEntryData[0].productDetails[0].rackNo,
        isUpdated: newpurchaseEntryData[0].productDetails[0].isUpdated,
        purchasePrice: newpurchaseEntryData[0].productDetails[0].purchasePrice ? newpurchaseEntryData[0].productDetails[0].purchasePrice : '',
        standardPrice: newpurchaseEntryData[0].productDetails[0].standardPrice,
        isFEI: newpurchaseEntryData[0].productDetails[0].isFEI,
        productImages: newpurchaseEntryData[0].productImages.images,
        baseProductpath: newpurchaseEntryData[0].baseProductpath,
        testReport: testReportFinal,
        insidePacking: finalinsidePacking,
      });
      this.setState({ formdata: formData });
    }
  }


  formSubmitHandler = (e) => {
    e.preventDefault();

    const validationResponse = validatePurchaseEntry(this.state.formdata);
    this.setState({ errors: validationResponse.error, position: validationResponse.position });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  printBarcode = (divName) => {
    // var printContents = document.getElementById(divName).innerHTML;
    // var originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // window.print();
    // document.body.innerHTML = originalContents;
    var content = document.getElementById(divName);
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  }


  onPrintClickHandler = (barcode) => {

    if (barcode.length > 0) {
      let popupBodyNew = barcode.map((eachBarcode, key) => {
        return (
          <tr key={key}>
            <td>{key + 1}</td>
            <td id={eachBarcode.barcode}><Barcode value={eachBarcode.barcode} /></td>
            <td><input type='button' className="btn btn-primary" onClick={() => this.printBarcode(eachBarcode.barcode)} value='PRINT' /></td>
          </tr>
        )
      });
      this.setState({ isOpen: true, popupBody: popupBodyNew });
    }
  }

  onToggleTableHandler = () => {
    const addClass = this.state.showPriceTable === '' ? 'hidden' : '';
    this.setState({showPriceTable:addClass});
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    let purchaseEntry = (
      <Layout>
        <PageHeader title="Purchase Entry" />
        <div className="contentpanel">
          <div className="row">
            <form encType="multipart/form-data" autoComplete="off" name="seriesform" method="post" onSubmit={this.formSubmitHandler}>
              <PurchaseEntryForm
                onChange={this.onChangeHandler}
                errors={this.state.errors}
                position={this.state.position}
                formdata={this.state.formdata}
                serverError={this.props.error}
                loading={this.props.loading}
                rackMaster={this.props.rackMaster}
                pricingDetails={this.props.pricingDetails}
                onPrintClick={this.onPrintClickHandler}
                isOpen={this.state.isOpen}
                closeModal={this.closeModal}
                popupBody={this.state.popupBody}
                modalTitle={this.state.modalTitle}
                showPriceTable={this.state.showPriceTable}
                toggleTable={this.onToggleTableHandler}
              />
            </form>
          </div>
        </div>
      </Layout>
    )
    if (this.props.response) {
      const path = "/purchase-entry-product-list/"+this.state.formdata.purchaseEntryId+'/' + encodeURI(this.props.response);
      purchaseEntry = <Redirect to={path} />
    }
    return (
      purchaseEntry
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (formdata) => dispatch(purchaseEntryAction.purchaseEntryEditStart(formdata)),
    onReset: () => dispatch(purchaseEntryAction.purchaseEntryReset()),
    onRackReset: () => dispatch(rackActions.rackReset()),
    onGetRack: () => dispatch(rackActions.rackListStart()),
    onGetPriceList: () => dispatch(purchaseEntryAction.purchaseEntryPriceFetchStart()),
    onGetPurchaseEntry: (entryId, productId) => dispatch(purchaseEntryAction.purchaseEntryFetchEditStart(entryId, productId))
  }
}

const mapStateToProps = state => {
  return {
    error: state.PurchaseEntry.error,
    loading: state.PurchaseEntry.loading,
    response: state.PurchaseEntry.response,
    pricingDetails: state.PurchaseEntry.pricingDetails,
    rackMaster: state.Rack.rackList,
    purchaseEntryData: state.PurchaseEntry.purchaseEntryData,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseEntryAdd);