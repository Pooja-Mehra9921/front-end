import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Signup from './component/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
 <Navbar/>
<Routes>
  <Route path='/' element={<h1>this is a home page</h1>}/>
  <Route path='/product' element={<h1>this is a product page</h1>}/>
  <Route path='/add' element={<h1>this is a add page</h1>}/>
  <Route path='/update' element={<h1>this is a update page</h1>}/>
  <Route path='/logout' element={<h1>this is a logout page</h1>}/>
  <Route path='/profile' element={<h1>this is a profile page</h1>}/>
  <Route path='/signup' element={<Signup/>}/>
</Routes>
<Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
