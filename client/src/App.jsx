import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup"; 
import Login from "./Login";   
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
