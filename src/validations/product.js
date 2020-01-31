export const validateProduct = (data, categoryArray) => {
  const response = {
    field: '',
    error: {}
  };
  // console.log("data", data.productimages);
  // const validExtension = (fileName, exts) => {
  //   return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
  // }

  const num = /^[0-9. ]+$/;

  // const id = data.id === undefined ? '' : data.id.trim();
  const catName = data.catName === undefined ? '' : data.catName.trim();
  const subcatId = data.subcatId === undefined ? '' : data.subcatId.trim();
  const brandId = data.brandId === undefined ? '' : data.brandId.trim();
  const leadtypeId = data.leadtypeId === undefined ? '' : data.leadtypeId.trim();
  const seriesId = data.seriesId === undefined ? '' : data.seriesId.trim();
  const sizepitchId = data.sizepitchId === undefined ? '' : data.sizepitchId.trim();
  const codeId = data.codeId === undefined ? '' : data.codeId.trim();
  const value = data.value === undefined ? '' : data.value.trim();
  const unit = data.unit === undefined ? '' : data.unit.trim();
  const nearbyvalue = data.nearbyvalue === undefined ? '' : data.nearbyvalue.trim();
  const volt = data.volt === undefined ? '' : data.volt.toString().trim();
  const nearbyvolt = data.nearbyvolt === undefined ? '' : data.nearbyvolt.toString().trim();
  // const productimages = data.productimages === undefined ? '' : data.productimages;

  // let imgLength = '';
  // if (data.uploadedproductimage) {
  //   imgLength = data.uploadedproductimage.length;
  // }

  if (seriesId.trim() === '') {
    response.field = 'seriesId';
    response.error.seriesId = 'Please select a valid Series';
  }
  else if (brandId.trim() === '') {
    response.field = 'brandId';
    response.error.brandId = 'Please select a valid Brand';
  }
  else if (catName.trim() === '') {
    response.field = 'catName';
    response.error.catName = 'Please select a valid Category';
  }
  // else if (subcatval === false) {
  //   response.field = 'subcatId';
  //   response.error.catName = 'Please select a valid Subcategory';
  // }
  else if (subcatId.trim() === '') {
    response.field = 'subcatId';
    response.error.subcatId = 'Please select a valid Subcategory';
  }
  else if (leadtypeId.trim() === '') {
    response.field = 'leadtypeId';
    response.error.leadtypeId = 'Please select a valid Lead Type';
  }
  else if (sizepitchId.trim() === '') {
    response.field = 'sizepitchId';
    response.error.sizepitchId = 'Please select a valid Size pitch';
  }
  else if (codeId.trim() === '') {
    response.field = 'codeId';
    response.error.codeId = 'Please select a valid Code';
  }
  else if (value.trim() === '') {
    response.field = 'value';
    response.error.value = 'Please select a valid Value';
  }
  else if (unit.trim() === '') {
    response.field = 'unit';
    response.error.unit = 'Please select a valid Unit';
  }
  else if (nearbyvalue && !num.test(nearbyvalue)) {
    response.field = 'nearbyvalue';
    response.error.nearbyvalue = 'Please select a valid Near by value';
  }
  else if (volt.trim() === '') {
    response.field = 'volt';
    response.error.volt = 'Please select a valid Volt';
  }
  else if (nearbyvolt && !num.test(nearbyvolt)) {
    response.field = 'nearbyvolt';
    response.error.nearbyvolt = 'Please select a valid Near by volt';
  }
  // else if (productimages !== '' &&  !validExtension(productimages, ['.pdf'])) {
  //   response.field = 'productimages';
  //   response.error.productimages = 'Invalid file, .jpg, .jpeg, .png files allowed';
  // }
  return response;
}