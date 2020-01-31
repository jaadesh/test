export const validateLeadType = (data, categoryArray) => {
  const response = {
    field: '',
    error: {}
  };
  const alpha = /^[a-zA-Z0-9 ]{1,50}$/;
  let subcatval = false;
  subcatval = categoryArray.includes(data.catname.trim());

  if (subcatval === false) {
    response.field = 'catname';
    response.error.catname = 'Please select a valid Category';
  }
  else if (data.leadtypename.trim() === ''  || !alpha.test(data.leadtypename.trim())) {
    response.field = 'leadtypename';
    response.error.leadtypename = 'Please enter a valid Lead Type';
  }

  return response;
}