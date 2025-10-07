// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sigin from './components/Sigin';
import SignUp from './components/Signup';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Sigin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
