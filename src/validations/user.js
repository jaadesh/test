export const validateUser = (data, roleArray, typeOfCompArray, countryArray, stateArray) => {
  const response = {
    field: '',
    error: {}
  };

  const regAlpha = /^[a-zA-Z]{1,50}$/;
  const regMobileNum = /^[0-9]{10}$/;
  const regPhoneNum = /^[0-9]+$/;
  const regPincode = /^[0-9]{6}$/;
  const regEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // let roleVal = false;
  // roleVal = roleArray.forEach(element => {
  //   if (element === data.role.trim()) {
  //     return true;
  //   }
  // });


// const designation = data.designation === undefined ? '' : data.designation.trim();
// const companyName = data.companyName === undefined ? '' : data.companyName.trim();
// const GSTNo = data.GSTNo === undefined ? '' : data.GSTNo.trim();
// const manufactureProduct = data.manufactureProduct === undefined ? '' : data.manufactureProduct.trim();
// const reference = data.reference === undefined ? '' : data.reference.trim();
// const details = data.details === undefined ? '' : data.details.trim();
// const phone = data.phone === undefined ? '' : data.phone.trim();
// const typeOfCompany = data.typeOfCompany === undefined ? '' : data.typeOfCompany.trim();
// const addressLine1 = data.addressLine1 === undefined ? '' : data.addressLine1.trim();
// const addressLine2 = data.addressLine2 === undefined ? '' : data.addressLine2.trim();
// const landmark = data.landmark === undefined ? '' : data.landmark.trim();
// const country = data.country === undefined ? '' : data.country.trim();
// const state = data.state === undefined ? '' : data.state.trim();
// const city = data.city === undefined ? '' : data.city.trim();
// const pincode = data.pincode === undefined ? '' : data.pincode.trim();

  // let typeOfCompVal = false;
  // typeOfCompVal = typeOfCompArray.forEach(element => {
  //   if (element === data.role.trim()) {
  //     return true;
  //   }
  // });

  // let countryVal = false;
  // countryVal = countryArray.forEach(element => {
  //   if (element === data.role.trim()) {
  //     return true;
  //   }
  // });

  // let stateVal = false;
  // stateVal = stateArray.forEach(element => {
  //   if (element === data.role.trim()) {
  //     return true;
  //   }
  // });
  if (data.role.trim() === '') {
    response.field = 'role';
    response.error.role = 'Please select a valid Role';
  }
  // else if (roleVal === false) {
  //   response.field = 'role';
  //   response.error.role = 'Please select a valid Role';
  // }
  else if (data.fname.trim() === '' || !regAlpha.test(data.fname.trim())) {
    response.field = 'fname';
    response.error.fname = 'First Name should only be Alphabets';
  }
  else if (data.lname.trim() === '' || !regAlpha.test(data.lname.trim())) {
    response.field = 'lname';
    response.error.lname = 'Last Name should only be Alphabets';
  }
  else if (data.email.trim() === '' || !regEmail.test(data.email.trim())) {
    response.field = 'email';
    response.error.email = 'Please select a valid Email';
  }
  else if (data.mobile.toString().trim() === '' || !regMobileNum.test(data.mobile.toString().trim())) {
    response.field = 'mobile';
    response.error.mobile = 'Please enter a valid mobile number.';
  }
  else if (data.pincode.toString().trim() !== '' && !regPincode.test(data.pincode.toString().trim())) {
    response.field = 'pincode';
    response.error.pincode = 'Please enter a valid pincode number.';
  }
  else if (data.phone.toString().trim() !== '' && !regPhoneNum.test(data.phone.toString().trim())) {
    response.field = 'phone';
    response.error.phone = 'Please enter a valid phone number.';
  }
  else if ((data.id === '' && (data.password.trim() === '' || data.password.length < 6)) || (data.id !== '' && data.checkChangePassword === true && (data.password.trim() === '' || data.password.length < 6))) {
    response.field = 'password';
    response.error.password = 'Password must contain atleast 6 characters.';
  }
  else if ((data.id === '' && (data.password.trim() !== data.confirmPassword.trim())) || (data.id !== ''  && data.checkChangePassword === true && (data.password.trim() !== data.confirmPassword.trim()))) {
    response.field = 'confirmPassword';
    response.error.confirmPassword = 'Password Mismatch';
  }
  return response; 
}
