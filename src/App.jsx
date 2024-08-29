import Navbar from "./components/Navbar"
import { createGlobalStyle } from 'styled-components';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import FindAPet from "./Screens/FindAPet";
import AdoptionLiklenessPredictor from "./Screens/AdoptionLiklenessPredictor";



const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
`;


function App() {
  

  return (
    <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path="/findPet" element = {<FindAPet />} />
        <Route path="/predictor" element={<AdoptionLiklenessPredictor />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
