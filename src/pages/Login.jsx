import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const userEmail = "user@gmail.com";
  const userPassword = "1234"

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;

    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.email === userEmail && user.password === userPassword) {
      alert("Login Successfull")
      navigate('/home');
    }
    else {
      alert("Invalid Email or Password");
    }

    setUser({
      email: "",
      password: ""
    });
  }

  return (
    <div>
      <h2>Login</h2>

      <div className='formContainer'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='inputField'>
            <label htmlFor="email">Enter Email : </label>
            <input type="email" name='email' id='email' value={user.email} placeholder='Enter your Email ID' onChange={handleUserInput} required />
          </div>

          <div className='inputField'>
            <label htmlFor="password">Enter Password : </label>
            <input type="password" name='password' id='password' value={user.password} placeholder='Enter your Password' onChange={handleUserInput} required />
          </div>

          <div className='buttonContainer'>
            <button type='submit' className='button'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
