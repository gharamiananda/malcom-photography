import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Header from './Pages/HomePage/Header/Header';
import ServiceDetail from './components/ServiceDetail';
import RequireAuth from './Pages/Authentication/RequireAuth';

function App() {
  return (
    <div className=" ">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}> </Route>


        <Route path="/service-detail/:id" element={
          <RequireAuth>
            <ServiceDetail />
          </RequireAuth>
        }> </Route>


      </Routes>

    </div>
  );
}

export default App;
