import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import joi from "joi";
export default function Register() {

  let [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: '',
  });
  const [Error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorValidation, setErrorValidation] = useState([]);
  let navigate = useNavigate();

  function getUserData(e) {
    let userData = { ...user };
    userData[e.target.name] = e.target.value;
    setUser(userData);

  }
  async function SendRegisterdData() {
    try {
      let { data } = await axios.post(`https://form-git-master-dev-a7med.vercel.app/api/auth/signUp`, user);

    if (data.message === 'success') {
      setIsLoading(false);
      //login
      navigate('/login');
    }
    } catch (error) {
      setError(error.response.data.Error);
      setIsLoading(false);
    }
  }
  function submitData(e) {
    setIsLoading(true);
    e.preventDefault();
    // SendRegisterdData();
    let validation = validateForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorValidation(validation.error.details);
      showAlert();
      
    }
    else {
      SendRegisterdData();
    }
   
  }
  function validateForm() {
    let schema = joi.object({
      first_name: joi.string().alphanum().min(3).max(15).required(),
      last_name: joi.string().alphanum().min(3).max(15).required(),
      age: joi.number().min(15).max(80).required(),
      email: joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: joi.string().pattern(/^[A-Z]+[a-z]+[0-9]{6,}$/).required()
    });
    return schema.validate(user, { abortEarly: false }) ;
  }
function showAlert(inputName){
  let alert=errorValidation.filter((error)=>{return error.context.key===inputName})
  // null safety
  if(alert[0]?.context.key==="password"){
    return <p className='text-danger'>Password must contain capital char,small char and 6 or more numbers</p>
  }
  else{
    return <p className='text-danger'>{alert[0]?.message}</p>
  }
}
  return (
    <>
      <form onSubmit={submitData}>
        <h2 className='my-4 text-center'>Registeration Form</h2>

        {Error.length > 0 ? <div className="alert alert-danger my-2 p-1">{Error}</div> : ''}
        <label htmlFor="first_name" className='my-2'>firstName</label>
        <input onChange={getUserData} type="text" name='first_name' id='first_name' className='form-control input-deco mb-4' />
        {errorValidation.length> 0 ? showAlert('first_name'):''}
    
        <label htmlFor="last_name" className='my-2'>lastName</label>
        <input onChange={getUserData} type="text" name='last_name' id='last_name' className='form-control input-deco mb-4' />
        {errorValidation.length> 0 ? showAlert('last_name'):''}

        <label htmlFor="age" className='my-2'>Age</label>
        <input onChange={getUserData} type="number" name='age' id='age' className='form-control input-deco mb-4' />
        {errorValidation.length>0?showAlert('age'):''}

        <label htmlFor="email" className='my-2'>E-mail</label>
        <input onChange={getUserData} type="email" name='email' id='email' className='form-control input-deco mb-4' />
        {errorValidation.length > 0 ? showAlert('email'):''}

        <label htmlFor="password" className='my-2'>password</label>
        <input onChange={getUserData} type="password" name='password' id='password' className='form-control input-deco mb-4' />
        {errorValidation.length > 0 ? showAlert('password'):''}

        <button type='submit' className='btn btn-info text-white  mb-5 '>
          {isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
        </button>
      </form>
    </>
  )
}
