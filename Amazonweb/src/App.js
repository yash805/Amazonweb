
import './App.css';
import Navbar from './Components/header/Navbar';
import Newnav from './Components/newnavbaar/Newnav';
import Maincomp from './Components/home/Maincomp';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/signup/SignIn';
import SignUp from './Components/signup/SignUp';
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
   <>
     <Navbar />
     <Newnav />
     <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />


     </Routes>
     <Footer />
   </>
  );
}

export default App;
