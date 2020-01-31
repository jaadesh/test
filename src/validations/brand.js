export const validateBrand = (data) => {
  const response = {
    field: '',
    error: {}
  };

  const alpha = /^[a-zA-Z0-9 ]{1,50}$/;

  if (data.brandname.trim() === '' || !alpha.test(data.brandname.trim())) {
    response.field = 'brandname';
    response.error.brandname = 'Brand Name should only be Alphanumeric';
  }
  return response;
}