import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/Add'
import Login from '../pages/Login';
import Register from '../pages/Registration';
import Update from '../pages/Update';
import Viewproduct from '../pages/viewproduct';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Add' element={<Add/>}></Route>
      <Route path='/Update/:id' element={ <Update/>}/>
      <Route path='/Viewproduct' element={ <Viewproduct/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
