export const validateValue = (data) => {
  const response = {
    field: '',
    error: {}
  };

  const alpha = /^[a-zA-Z ]{1,50}$/;
  const num = /^[0-9.]{1,50}$/;
  if (String(data.code).trim() === '' || !num.test(String(data.code).trim())) {
    response.field = 'code';
    response.error.code = 'Code should only be Numeric';
  }
  else if (data.value.trim() === '' || !num.test(data.value.trim())) {
    response.field = 'value';
    response.error.value = 'Value should only be Numeric';
  }
  else if (data.unit.trim() === '' || !alpha.test(data.unit.trim())) {
    response.field = 'unit';
    response.error.unit = 'Invalid Unit value';
  }
  return response;
}