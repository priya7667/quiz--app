
import './App.css';

import NavBar from './components/navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    
    <Router>
    <NavBar />
    <Login/>
    <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    
    {/* <Route path="/quiz" element={<Quiz />} />  */}
    </Routes>
</Router>
    
  );
}

export default App;
