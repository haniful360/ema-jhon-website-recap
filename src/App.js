
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Headers from './Components/Headers/Headers';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Headers></Headers>
      {/* <Shop></Shop>  */}
      <Routes>
        <Route path= '/' element={<Shop></Shop>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='orders' element={<Orders></Orders>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
