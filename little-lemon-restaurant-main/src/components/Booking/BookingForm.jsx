import './booking.css';
import { useState } from 'react';

export default function BookingForm(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");

    function handleDateChange(e) {
        setDate(e.target.value);
        props.dispatch(date);
    }

    return (
        <form className='form-container' action="">
            <div className="form-input">
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id='res-date'
                    value={date}
                    onChange={handleDateChange}
                />
            </div>
            <div className="form-input">
                <label htmlFor="res-time">Choose time</label>
                <select
                    name="reservation-time"
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {
                        props.availableTimes.map((time) => {
                            return <option key={time}>{time}</option>
                        })
                    }
                </select>
            </div>
            <div className="form-input">
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder='1'
                    min="1"
                    max="10"
                    id='guests'
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label htmlFor="occasion">Occasion</label>
                <select
                    name='reservation-occasion'
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input type="submit" value="Make Your reservation" />
        </form>
    );

}