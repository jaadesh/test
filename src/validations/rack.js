export const validateRack = (data,i) => {
  const response = {
    field: '',
    error: {}
  };

  const alpha = /^[a-zA-Z0-9- ]{1,50}$/;

  if (data.location === '' || isNaN(data.location)) {
    response.field = 'location';
    response.error.location = 'Invalid Location';
  }
  else if ((data.rack.trim() === ''  || !alpha.test(data.rack.trim())) && i === 1) {
    response.field = 'rack';
    response.error.rack = 'Invalid Rack';
  }
  return response;
}