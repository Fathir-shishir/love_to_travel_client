import './App.css';
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import {useDispatch} from "react-redux"
import { setUser } from "./redux/features/authSlice";
import AddEditTour from './pages/AddEditTour';
import SingleTour from './pages/SingleTour';
import Dashboard from './pages/Dashboard';
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    
  }, []);
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
    <ToastContainer></ToastContainer>
    <Routes>
    <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addTour" element={<AddEditTour></AddEditTour>} />
          <Route path="/editTour/:id" element={<AddEditTour></AddEditTour>} />
          <Route path="/tour/:id" element={<SingleTour></SingleTour>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
         
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
   