import React, { useState } from 'react';

function BookingForm(props) {

    // work around for javascript to make dates conform to US standard to get right date
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Add 1 because months are zero-based
    const day = String(today.getDate()).padStart(2, '0');

    const currentDate = `${year}-${month}-${day}`;
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
      };

    // Check if all required fields have values
    const isFormValid = date && times && guests && occasion;

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input
                                id='book-date'
                                value={date}
                                onChange={(e) => handleChange(e.target.value)}
                                type='date'
                                required
                                aria-required='true'
                                aria-invalid={!date} //Use this is you want to indicate an error state when date is empty
                                min={currentDate} // Set the minimum date to the current date
                            />
                        </div>

                        {/* time selection */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value=''>Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        {/* number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <select id='book-guests' value={guests} onChange={(e) => setGuests(e.target.value)}>
                            <option value=''>Select a Number</option>
                                {[...Array(8).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* occasion field */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={handleOccasionChange} required>
                                <option disabled value=''>Choose an Occasion</option>
                                <option value='Birthday'>Birthday</option>
                                <option value='Anniversary'>Anniversary</option>
                                <option value='Other'>Other</option>
                                <option value='None'>None</option>
                            </select>
                        </div>

                        {/* submit button */}
                        <div className={isFormValid ? 'enabled-button' : 'btnReceive'}>
                            <input aria-label='Submit Booking' type='submit' value={"Make Your Reservation"} disabled={!isFormValid} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;