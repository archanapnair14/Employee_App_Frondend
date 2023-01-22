import Form from "./components/EmployeeForm";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";


const App = () => {
  return (
    <>
    <div style={{backgroundColor: "#C4C4C4"}} className="vh-100">
      <Routes>
        <Route exact  path="/" element={ <Home/> } />
        <Route exact  path="/form" element={ <Form/> } />
      </Routes>
    </div>
      
    </>
  );
};

export default App;
