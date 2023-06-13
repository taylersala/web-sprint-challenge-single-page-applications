import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Form from './components/Form';
import schema from './validation/formSchema';
import axios from 'axios';
// import schema from '../validation/formSchema'
 import * as yup from 'yup';
// import {useState, useEffect } from "react"


const initialFormValues = {
  name: '',
  toppings: false,
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  onion: false,
}

const initialFormErrors = {
  name: '',
  toppings: '',
  size: '',
  pepperoni: '',
  sausage: '',
  mushrooms: '',
  onion: ''
}

const App = () => {
  
  const [formValues, setFormValues] = useState(initialFormValues);

  const[formErrors, setFormErrors] = useState(initialFormErrors)

  const [name, setName] = useState([])

const handleSubmit = () => {
  axios.post('https://reqres.in/api/orders', formValues)
  .then(res => {
    // console.log(res)
    setName([ res.data, ...name])
  })
  .catch(err => console.error(err))
}

const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

  const handleChange = ( name, value ) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  return (
  
    <div className="App">
      <h1>Lambda Eats</h1>
      
      <Link to="/" id="home-button">Home</Link>
      <p>Your Favorite Food, delivered while coding!</p>
      <Link to="/pizza" id="order-pizza">Order Pizza</Link>

     <Routes>
      <Route exact path="/pizza" element={<Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}
      />} />
      </Routes>
     </div>
    
  );
};
export default App;





