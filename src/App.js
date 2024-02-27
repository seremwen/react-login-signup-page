import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import Container from './components/Container';
import Login from './components/Login';
import Signup from './components/Signup'; // Assuming you have a Signup component
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
  
    <Router>
      <div className="App">
        {/* Add your header content here if needed */}

        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
