import './App.css';
import {BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './component/home/Home';
import Header from "./component/header/Header"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
      );
}

export default App;
