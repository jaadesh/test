export const validateLogin = (data) => {
  const response = {
    field: '',
    error: {}
  };

  if (data.email.trim() === '') {
    response.field = 'email';
    response.error.email = 'Please enter an Email';
  }
  else if (data.password.trim() === '') {
    response.field = 'password';
    response.error.password = 'Please enter a password';
  }

  return response;
}