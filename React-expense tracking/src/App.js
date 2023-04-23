import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import About from "./About/About";
import Expense from "./Expense/Expense";
import Table from "./Table/Table";
import './assets/font-awesome/css/font-awesome.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Signup/>}/>
        <Route path="login" element={ <Login/>}/>
        <Route path="about" element={ <About/>}/>
        <Route path="expense" element={ <Expense/>}/>
        <Route path="table" element={  <Table/>}/>
        </Routes>
        </BrowserRouter>
  
  
 
 

  </div>
  
  );
}

export default App;
