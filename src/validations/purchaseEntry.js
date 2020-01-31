export const validatePurchaseEntry = (data) => {
  const response = {
    field: '',
    position:{},
    error: {}
  };
  let testReportValueValidation = []
  let testReportVoltValidation = []
  data.testReport.forEach((eachReport) =>{
    if(eachReport.value.trim() === ""){
      testReportValueValidation.push(eachReport.id);
    }
    if(eachReport.volt !=='' && isNaN(eachReport.volt)){
      testReportVoltValidation.push(eachReport.id);
    }
  });


    let hasError = false;
    let errorMessage = '';
    let errorInfo = '';
    let insidePackingCount = 0;

    data.insidePacking.forEach(eachInsidePacking => {
    let firstLevel = eachInsidePacking.wholesale.firstInsideBox;
    let secondLevel = firstLevel ? eachInsidePacking.wholesale.firstInsideBox.secondInsideBox : undefined;
    
    if (eachInsidePacking.dateCode === '' || eachInsidePacking.dateCode === undefined) {
      hasError = true;
      errorMessage = 'The Date Code cannot be blank';
      errorInfo = 'dateCode-'+insidePackingCount;
    }
    else if (eachInsidePacking.wholesale.totalMasterBox === '' || eachInsidePacking.wholesale.totalMasterBox === undefined || isNaN(parseInt(eachInsidePacking.wholesale.totalMasterBox)) || parseInt(eachInsidePacking.wholesale.totalMasterBox) < 1) {
      hasError = true;
      errorMessage = 'Invalid Total Master Box value';
      errorInfo = 'totalMasterBox-'+insidePackingCount;
    }
    else if (eachInsidePacking.wholesale.totalPieces === '' || eachInsidePacking.wholesale.totalPieces === undefined || isNaN(parseInt(eachInsidePacking.wholesale.totalPieces)) || parseInt(eachInsidePacking.wholesale.totalPieces) < 1) {
      hasError = true;
      errorMessage = 'Invalid Total pieces per Master Box value';
      errorInfo = 'totalPieces-'+insidePackingCount;
    }
    else if (firstLevel !== undefined && (firstLevel.totalBox === '' || firstLevel.totalBox === undefined || isNaN(parseInt(firstLevel.totalBox)) || parseInt(firstLevel.totalBox) < 1)) {
      hasError = true;
      errorMessage = 'Invalid value of total box for First Inside packing';
      errorInfo = 'totalBox-'+insidePackingCount+'-first';
    }
    else if (firstLevel !== undefined && (firstLevel.piecePerBox === '' || firstLevel.piecePerBox === undefined || isNaN(parseInt(firstLevel.piecePerBox)) || parseInt(firstLevel.piecePerBox) < 1)) {
      hasError = true;
      errorMessage = 'Invalid value of pieces per box for First Inside packing';
      errorInfo = 'piecePerBox-'+insidePackingCount+'-first';
    }
    else if (firstLevel !== undefined && (parseInt(firstLevel.totalBox) * parseInt(firstLevel.piecePerBox)) !== parseInt(eachInsidePacking.wholesale.totalPieces)) {
      hasError = true;
      errorMessage = 'Total Box * Total piece per box for First Inside packing is not equal to total pieces per master box';
      errorInfo = 'piecePerBox-'+insidePackingCount+'-first';
    }
    else if (firstLevel !== undefined && secondLevel !== undefined && (secondLevel.totalBox === '' || secondLevel.totalBox === undefined || isNaN(parseInt(secondLevel.totalBox)) || parseInt(secondLevel.totalBox) < 1)) {
      hasError = true;
      errorMessage = 'Invalid value of total box for Second Inside packing';
      errorInfo = 'totalBox-'+insidePackingCount+'-second';
    }
    else if (firstLevel !== undefined && secondLevel !== undefined && (secondLevel.piecePerBox === '' || secondLevel.piecePerBox === undefined || isNaN(parseInt(secondLevel.piecePerBox)) || parseInt(secondLevel.piecePerBox) < 1)) {
      hasError = true;
      errorMessage = 'Invalid value of pieces per box for Second Inside packing';
      errorInfo = 'piecePerBox-'+insidePackingCount+'-second';
    }
    else if (firstLevel !== undefined && secondLevel !== undefined && (parseInt(secondLevel.totalBox) * parseInt(secondLevel.piecePerBox)) !== parseInt(firstLevel.piecePerBox)) {
      hasError = true;
      errorMessage = 'Total Box * Total piece per box for Second Inside packing is not equal to total pieces per box first inside packing';
      errorInfo = 'piecePerBox-'+insidePackingCount+'-second';
    }
    insidePackingCount++;
  });


  if(testReportValueValidation.length > 0){
    let valueId = "value-"+testReportValueValidation[0];
    response.field = valueId;
    response.error["value-"+testReportValueValidation[0]] = 'Please select a valid value';
  }
  else if(testReportVoltValidation.length > 0){
    let valueId = "volt-"+testReportVoltValidation[0];
    response.field = valueId;
    response.error["volt-"+testReportVoltValidation[0]] = 'Please select a valid volt';
  }
  else if(hasError){
    let field = errorInfo.split('-');
    if(field[0]==='totalBox' && field[2] === 'first'){
      response.field = field[0]+'-'+field[1];
      response.position['value'] = field[2];
      response.error[field[0]+'-'+field[1]] = errorMessage;
    }
    else if(field[0]==='piecePerBox' && field[2] === 'first'){
      response.field = field[0]+'-'+field[1];
      response.position['value'] = field[2];
      response.error[field[0]+'-'+field[1]] = errorMessage;
    }
    else if(field[0]==='totalBox' && field[2] === 'second'){
      response.field = field[0]+'-'+field[1];
      response.position['value'] = field[2];
      response.error[field[0]+'-'+field[1]] = errorMessage;
    }
    else if(field[0]==='piecePerBox' && field[2] === 'second'){
      response.field = field[0]+'-'+field[1];
      response.position['value'] = field[2];
      response.error[field[0]+'-'+field[1]] = errorMessage;
    }
    else{
      response.field = errorInfo;
      response.error[errorInfo] = errorMessage;
    }
  }
  else if(data.weight ==='' || isNaN(data.weight)){
    response.field = 'weight';
    response.error.weight = 'Please select a valid weight';
  }
  else if(data.location ===''){
    response.field = 'location';
    response.error.location = 'Please select a valid location';
  }
  else if(data.rackNo ===''){
    response.field = 'rackNo';
    response.error.rackNo = 'Please select a valid rack';
  }
  else if(data.purchasePrice ==='' || isNaN(data.purchasePrice)){
    response.field = 'purchasePrice';
    response.error.purchasePrice = 'Please select a valid price';
  }
  else if(data.standardPrice ==='' || isNaN(data.standardPrice)){
    response.field = 'standardPrice';
    response.error.standardPrice = 'Please select a valid price';
  }
  
  return response;
}