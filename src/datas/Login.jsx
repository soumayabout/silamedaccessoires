import React, { useState } from 'react';
import './Style/Login.css';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import { authenticateUser } from './datalogin';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    setErrors(Validation(values));

    if (registrationSuccess) {
      alert('Registration successful! You can now log in.');
      setRegistrationSuccess(false);
    } else if (!Object.keys(errors).length && authenticateUser(email, password)) {
      alert('Authentication successful!');
    } else {
      alert('Authentication failed. Check your credentials.');
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Sign in</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
          <div className='error'>{errors.email && <span>{errors.email}</span>}</div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <div className='error'>{errors.password && <span>{errors.password}</span>}</div>
          <button type="submit">Log in</button>
          <p className="login_signup">
            Already have an account?
            <div className="login_agree">
              <input type="checkbox" id="" />
              <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            <Link to="/Signup " style={{ textDecoration: 'none' }}>
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
