import { CATEGORY_MASTER } from '../config/config';

export const validateSizePitch = (data, show_width) => {
  const response = {
    field: '',
    error: {}
  };

  let subcatval = false;
  subcatval = CATEGORY_MASTER.includes(data.sp_catname.trim());

  if (subcatval === false) {
    response.field = 'sp_catname';
    response.error.sp_catname = 'Please select a category';
  }
  else if (parseFloat(data.sp_diameter) === '' || isNaN(data.sp_diameter) || data.sp_diameter < 0.1) {
    response.field = 'sp_diameter';
    response.error.sp_diameter = 'Value can only be numeric and cannot be 0';
  }
  else if (parseFloat(data.sp_height) === '' || isNaN(data.sp_height) || data.sp_height < 0.1) {
    response.field = 'sp_height';
    response.error.sp_height = 'Value can only be numeric and cannot be 0';
  }
  else if (parseFloat(data.sp_pitch) === '' || isNaN(data.sp_pitch) || data.sp_pitch < 0.1) {
    response.field = 'sp_pitch';
    response.error.sp_pitch = 'Value can only be numeric and cannot be 0';
  }
  else if (show_width && (parseFloat(data.sp_width) === '' || isNaN(data.sp_width) || data.sp_width < 0.1)) {
    response.field = 'sp_width';
    response.error.sp_width = 'Value can only be numeric and cannot be 0';
  }

  return response;
}