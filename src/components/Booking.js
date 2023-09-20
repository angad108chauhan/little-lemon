// Booking.js

import React from 'react';
import BookingForm from './BookingForm';

function Booking(props) {
  return (
    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm} />
  );
}

export default Booking;