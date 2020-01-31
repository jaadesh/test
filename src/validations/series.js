export const validateSeries = (data, categoryArray) => {
  const response = {
    field: '',
    error: {}
  };

  const validExtension = (fileName, exts) => {
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
  }

  let subcatval = false;
  const alphanum = /^[a-zA-Z0-9 ]{1,50}$/;
  subcatval = categoryArray.forEach(element => {
    if (element === data.catName.trim()) {
      return true;
    }
  });

  const catName = data.catName === undefined ? '' : data.catName.trim();
  const subCatId = data.subCatId === undefined ? '' : data.subCatId;
  const seriesName = data.seriesName === undefined ? '' : data.seriesName.trim();
  const brandId = data.brandId === undefined ? '' : data.brandId;
  const degree = data.degree === undefined ? '' : data.degree.trim();
  const loadLife = data.loadLife === undefined ? '' : data.loadLife;
  const lowESR = data.lowESR === undefined ? '' : data.lowESR.trim();
  const highRippleCurrent = data.highRippleCurrent === undefined ? '' : data.highRippleCurrent.trim();
  const pdfDataSheet = data.pdfDataSheet === undefined ? '' : data.pdfDataSheet;
  const remark = data.remark === undefined ? '' : data.remark.trim();
  const pdfDataSheetDisplay = data.pdfDataSheetDisplay === undefined ? '' : data.pdfDataSheetDisplay.trim();



  if (catName.trim() === '') {
    response.field = 'catName';
    response.error.catName = 'Please select a valid Category';
  }
  else if (subcatval === false) {
    response.field = 'catName';
    response.error.catName = 'Please select a valid Category1';
  }
  else if (subCatId === '') {
    response.field = 'subCatId';
    response.error.subCatId = 'Please select a valid Subcategory';
  }
  else if (seriesName.trim() === '' || !alphanum.test(seriesName.trim())) {
    response.field = 'seriesName';
    response.error.seriesName = 'Series Name should only be Alphanumeric';
  }
  else if (brandId === '') {
    response.field = 'brandId';
    response.error.brandId = 'Please select a valid Brand';
  }
  else if (catName === 'Electrolytic Capacitors' && degree.trim() === '') {
    response.field = 'degree';
    response.error.degree = 'Please enter a valid Degree';
  }
  else if (catName === 'Electrolytic Capacitors' && loadLife === '') {
    response.field = 'loadLife';
    response.error.loadLife = 'Please enter a valid Load Life';
  }
  else if (catName === 'Electrolytic Capacitors' && lowESR.trim() === '') {
    response.field = 'lowESR';
    response.error.lowESR = 'Invalid value';
  }
  else if (catName === 'Electrolytic Capacitors' && highRippleCurrent.trim() === '') {
    response.field = 'highRippleCurrent';
    response.error.highRippleCurrent = 'Invalid value';
  }
  else if (((pdfDataSheet === '' || !validExtension(pdfDataSheet.name, ['.pdf'])) && !data.id) || (data.id && pdfDataSheetDisplay === '' && (pdfDataSheet === '' || !validExtension(pdfDataSheet.name, ['.pdf'])))) {
    response.field = 'pdfDataSheet';
    response.error.pdfDataSheet = 'Please select a valid PDF file';
  }
  else if (remark.trim() === '') {
    response.field = 'remark';
    response.error.remark = 'Please enter valid remark.';
  }
  return response;
}