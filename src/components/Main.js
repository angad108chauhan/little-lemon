// Main.js

import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {
  const fetchAPI = function (date) {
    let result = [];
    for (let i = 5; i <= 11; i++) {
      if (Math.random() < 0.5) {
        result.push(i + ':00');
      }
      if (Math.random() > 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  }

  const submitAPI = function (formData) {
    return true;
  }

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(date) };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} SubmitForm={submitForm} />} />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
