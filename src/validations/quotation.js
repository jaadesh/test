export const validateQuotation = (data, selectedData) => {
  const response = {
    field: '',
    error: {}
  };

  const regMobileNum = /^[0-9]{10}$/;
  const regEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  let requiredQuantityValidation = []
  let packageQuontityValidation = []
  let amountValidation = []
  let isSelected = 0;
  if (selectedData.length>0) {
    isSelected = 1;
    selectedData.forEach((eachQuotationValue) => {
      if (eachQuotationValue.selectedRequiredQuantity.trim() === "" || isNaN(eachQuotationValue.selectedRequiredQuantity)) {
        requiredQuantityValidation.push(eachQuotationValue.selectedProductId);
      }
      if (eachQuotationValue.selectedPackageQuantity.trim() === "" || isNaN(eachQuotationValue.selectedPackageQuantity)) {
        packageQuontityValidation.push(eachQuotationValue.selectedProductId);
      }
      if (eachQuotationValue.selectedAmount === "" || isNaN(eachQuotationValue.selectedAmount)) {
        amountValidation.push(eachQuotationValue.selectedProductId);
      }
    });
  }
  else {
    isSelected = 0;
  }


  const id = data.id === undefined ? '' : data.id.trim();
  const mobile = data.mobile === undefined ? '' : data.mobile.trim();
  const userId = data.userId === undefined ? '' : data.userId.trim();
  const email = data.email === undefined ? '' : data.email.trim();
  const fname = data.fname === undefined ? '' : data.fname.trim();
  const lname = data.lname === undefined ? '' : data.lname.trim();
  if (mobile.toString().trim() === '' || !regMobileNum.test(mobile.toString().trim())) {
    response.field = 'mobile';
    response.error.mobile = 'Please enter a valid mobile number.';
  }
  else if (email.trim() === '' || !regEmail.test(email.trim())) {
    response.field = 'email';
    response.error.email = 'Please select a valid Email';
  }
  else if (isSelected === 0) {
    response.field = '';
    response.error.isSelected = 'Please Select Atleast one Product.';
  }
  else if (requiredQuantityValidation.length > 0) {
    let reqQuantityId = "selectedRequiredQuantity-" + requiredQuantityValidation[0];
    response.field = reqQuantityId;
    response.error["selectedRequiredQuantity-" + requiredQuantityValidation[0]] = 'Please enter numeric data';
  }
  else if (packageQuontityValidation.length > 0) {
    let packQuantityId = "selectedPackageQuantity-" + packageQuontityValidation[0];
    response.field = packQuantityId;
    response.error["selectedPackageQuantity-" + packageQuontityValidation[0]] = 'Please enter numeric data';
  }
  else if (amountValidation.length > 0) {
    let amountId = "selectedAmount-" + amountValidation[0];
    response.field = amountId;
    response.error["selectedAmount-" + amountValidation[0]] = 'Please enter numeric data';
  }

  return response;
}

export const validateSearch = (data) => {
  const response = {
    field: '',
    error: {}
  };

  const value = data.value === undefined ? '' : data.value.trim();
  const volt = data.volt === undefined ? '' : data.volt.trim();
  const brand = data.brand === undefined ? '' : data.brand.trim();
  const loadLife = data.loadLife === undefined ? '' : data.loadLife.trim();
  const lowESR = data.lowESR === undefined ? '' : data.lowESR.trim();
  const highRippleCurrent = data.highRippleCurrent === undefined ? '' : data.highRippleCurrent.trim();
  const sizePitch = data.sizePitch === undefined ? '' : data.sizePitch.trim();
  const leadType = data.leadType === undefined ? '' : data.leadType.trim();
  const isFEI = data.isFEI === undefined ? '' : data.isFEI.trim();

  if (value.trim() === '' && volt.trim() === '' && brand.trim() === '' && loadLife.trim() === '' && lowESR.trim() === '' && highRippleCurrent.trim() === '' && sizePitch.trim() === '' && leadType.trim() === '' && isFEI.trim() === '') {
    response.field = 'value';
    response.error.value = 'Please select atleast one filter.';
  }
  return response;
}   