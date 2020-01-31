export const validateSubCategory = (data, categoryArray) => {
  const response = {
    field: '',
    error: {}
  };

  const validExtension = (fileName, exts) => {
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
  }

  let subcatval = false;
  const alpha = /^[a-zA-Z ]{1,50}$/;
  subcatval = categoryArray.includes(data.catname.trim());

  if (data.catname.trim() === '') {
    response.field = 'catname';
    response.error.catname = 'Please select a valid Category';
  }
  else if (subcatval === false) {
    response.field = 'catname';
    response.error.catname = 'Please select a valid Category1';
  }
  else if (data.subcatname.trim() === '' || !alpha.test(data.subcatname.trim())) {
    response.field = 'subcatname';
    response.error.subcatname = 'Name should only contain Alphbets and should be less than 50 characters';
  }
  else if (data.subcatimage === '' && !data.id) {
    response.field = 'subcatimage';
    response.error.subcatimage = 'Please select a valid image';
  }
  else if (data.subcatimage !== '' && !validExtension(data.subcatimage.name, ['.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG'])) {
    response.field = 'subcatimage';
    response.error.subcatimage = 'Please select a valid image';
  }

  return response;
}