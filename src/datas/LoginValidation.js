export const Validation = (values) => {
    let error = {};
    const email_pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    const password_pattern = "[a-z0-9._%+-][a-z0-9.-]";
  
    if (values.email === "") {
      error.email = "email should not be empty";
    } else {
      if (!values.email.match(email_pattern)) {
        error.email = "please enter a valid email";
      }
    }
  
    if (!values.password === "") {
      error.password = "Password should not be empty";
    } else {
      if (!values.password.match(password_pattern)) {
        error.password = "Password didn't match";
      }
    }
  
    return error;
  };
  
  export const signValidation = (values) => {
    let error = {};
    const email_pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    const password_pattern = "[a-z0-9._%+-][a-z0-9.-]";
  
    if (values.name === "") {
      error.name = "name should not be empty";
    } else {
      error.name = "";
    }
  
    if (values.email === "") {
      error.email = "email should not be empty";
    } else {
      if (!values.email.match(email_pattern)) {
        error.email = "please enter a valid email";
      }
    }
  
    if (!values.password === "") {
      error.password = "Password should not be empty";
    } else {
      if (!values.password.match(password_pattern)) {
        error.password = "Password didn't match";
      }
    }
  
    return error;
  };
  
  export default Validation;
  