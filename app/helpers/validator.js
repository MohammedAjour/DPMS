
exports.regFormValidator = (userSubmitedData) => {
  const regexEmailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valide = false;
  let message = '';
  if (userSubmitedData.username.trim().length > 3) {
    message += '\n invalide email address';
    if (userSubmitedData.password.trim().length > 6) {
      message += '\n password less than 6 charachters';
      if (regexEmailValidator.test(userSubmitedData.email.trim())) { message += '\n username should not be less than 3 charachters'; } else valide = true;
    }
  }
  return {valide: valide, errMsg: message};
};
exports.loginFormValidator = (SubmitedLoginForm) => {
  const regexEmailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valide = false;
  let message = '';
  if (SubmitedLoginForm.username.trim().length > 3) {
    message += '\n invalide email address';
    if (SubmitedLoginForm.password.trim().length > 6) {
      message += '\n password must be more than 6 charachters';
    }
  }
  return {valide: valide, errMsg: message};
};
