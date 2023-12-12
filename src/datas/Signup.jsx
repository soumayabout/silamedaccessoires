import React, { useState, useEffect } from 'react';
import './Style/signup.css';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import { addUserToDatabase, findUserByEmail, getUsersFromStorage } from './datalogin';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    console.log('User data:', getUsersFromStorage());
  }, [successMessage]);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clearForm = () => {
    setValues({ name: '', email: '', password: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    setErrors(Validation(values));

    if (!Object.keys(errors).length && !findUserByEmail(email)) {
      addUserToDatabase({ name, email, password });
      clearForm(); 
      setSuccessMessage('Registration successful!');
      alert('Registration successful!');
      window.location.href = '/login';
    } else {
      setSuccessMessage('');
      alert('User with this email already exists.');
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <h1>Sign up</h1>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" placeholder="UserName" onChange={handleChange} value={values.name} />
          <br />
          <div className='error'>{errors.name && <span>{errors.name}</span>}</div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} value={values.email} />
          <br />
          <div className='error'>{errors.email && <span>{errors.email}</span>}</div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
          <br />
          <div className='error'>{errors.password && <span>{errors.password}</span>}</div>
          <button type="submit" disabled={Object.keys(errors).length > 0}>
            Signup
          </button>
          <br />
          <p className="login_signup">Already have an account?</p>
          <div className="login_agree">
            <input type="checkbox" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Log in
          </Link>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Signup;
