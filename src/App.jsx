import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

import Home from "./components/pages/Home";
import Form from "./components/Form"

function App() {
  
  return (

    <BrowserRouter>
     

      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
