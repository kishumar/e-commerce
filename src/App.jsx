
import Register from './pages/Register';
import Login from './pages/Login';
// import Home from './pages/Home.jsx';
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { UserDataContext } from './context/UserContext';
import Product from './pages/Product';
import Contact from './pages/Contact';
import {useLocation} from "react-router-dom"
import About from "./pages/About"
import Collection from "./pages/Collection"
import { Navigate } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import NotFound from './pages/NotFound';

const App = () => {

  let {userData}= useContext(UserDataContext)
  let location = useLocation()
  return (
    <>
 {userData && <Navbar />}

    <Routes>
      <Route path="/login" 
      element={userData ? (<Navigate to ={location.state?.from || "/"} />)
      :(<Login />) } />

      <Route path="/register" element={userData ? (<Navigate to ={location.state?.from || "/"} />)
      :(<Register />)} />
      

      <Route path="/" element={userData ? <Home /> : <Navigate to="/login" state={{from: location.pathname}} />} />


      <Route path="/about" element={userData ? <About /> : <Navigate to="/login" state={{from: location.pathname}} />} />


      <Route path="/collection" element={userData ? <Collection /> : <Navigate to="/login" state={{from: location.pathname}} />} />


<Route path='/product'
element={userData ? <Product /> :<Navigate to ="/login"
  state={{from: location.pathname}} /> 
} />


<Route path='/contact'
element={userData ? <Contact /> :<Navigate to ="/login"
  state={{from: location.pathname}} /> 
} />


<Route path='/productdetail/:productId'
element={userData ? <ProductDetail /> :<Navigate to ="/login"
  state={{from: location.pathname}} /> 
} />
<Route path='/cart'
element={userData ? <Cart /> :<Navigate to ="/login"
  state={{from: location.pathname}} /> 
} />
<Route path='/placeorder'
element={userData ? <PlaceOrder /> :<Navigate to ="/login"
  state={{from: location.pathname}} /> 
} />
<Route path='/order'
element={userData ? <Order /> :<Navigate to ="/login"
  state={{from: location.pathname}} /> 
} />
<Route path="*"
element={<NotFound/>}/> 



    </Routes>
    </>
  )
}

export default App