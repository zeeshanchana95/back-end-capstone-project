import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './components/Booking/BookingPage';
import { useReducer } from 'react';

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}
// api simulation
const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

function App() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  function updateTimes(selectedDate) {
    return fetchAPI(selectedDate);
  }

  function initializeTimes() {
    return fetchAPI(new Date());
  }

  return (
    <main className='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking-table' element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        } />
      </Routes>
    </main>
  );
}

export default App;
