import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Emplist from './Emplist';
import Empcreate from './Empcreate';
import Empedit from './Empedit';
import Empdetail from './Empdetail';
function App() {
  return (
    <div className="App">
      <h1>
     demo of the json server and the default       
      </h1><BrowserRouter>
      <Routes>
        <Route path="/" element={<Emplist/>}/> 
        <Route path="/employee/create" element={<Empcreate/>}/> 
        <Route path="/employee/detail/:empid" element={<Empdetail/>}/> 
        <Route path="/employee/edit/:empid" element={<Empedit/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
