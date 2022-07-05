import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product'
import About from './components/About'
import Service from './components/Service';
import {Route,Routes} from 'react-router-dom'


function App() {
   //write javascript here
    return (
        <div className="App">
            <Navbar/>
            
            <Routes>
                <Route path='/' element={
                <>
                <Home/>
                <Service/>
                </>
            }>
      
            </Route>
            </Routes>
            <Routes>
                <Route path='/product' element={<Product/>}></Route>
            </Routes>
            <Routes>
            <Route path='/about' element={<About/>}></Route> 
            </Routes>
          <Routes>
            <Route path='/service' element={<Service/>}></Route>
          </Routes>
          
           
        </div>
    );
}

export default App;
