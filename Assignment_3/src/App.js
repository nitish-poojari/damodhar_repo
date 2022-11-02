import Admin_home from './components/Admin_home';
import Addhotel from "./components/Addhotel";
import {Routes, Route} from 'react-router-dom';
import Update_hotel from './components/Update_hotel';
import Show_user from './components/Show_user';
import Show_booking from './components/Show_booking';
import Show_Cancellation from './components/Show_Cancellation';
import User_Home from './components/User/User_Home';
import Available_hotel from './components/User/Available_hotel';
import Login from './components/Login';
import Register from './components/Register';
import Select_hotel from './components/User/Select_hotel';
import Show_user_booking from './components/User/Show_user_booking';
import Cancel_booking from './components/User/Cancel_booking';

function App() {  
  return (
    <div className="App">
        <Routes>
          <Route path="/Add_hotel" element={<Addhotel />}></Route>
          <Route path="/update_hotel" element={<Update_hotel />}></Route>
          <Route path="/show_user" element={<Show_user />}></Route>
          <Route path="/show_booking" element={<Show_booking />}></Route>
          <Route path="/cancelled_Booking" element={<Show_Cancellation />}></Route>
          <Route path="/Available_hotel" element={<Available_hotel />}></Route>
          <Route path="/selected_hotel" element={<Select_hotel />}></Route>
          <Route path="/user_bookings" element={<Show_user_booking />}></Route>
          <Route path="/canceled_bookings" element={<Cancel_booking />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>    
        </Routes>      
    </div>
  );
}
export default App;
