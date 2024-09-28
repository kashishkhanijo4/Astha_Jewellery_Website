
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Location from './pages/Location';
import BuyNow from './pages/BuyNow';
import WishlistLogin from './pages/Wishlist';
import Dashboard from './pages/Dashboard';
import AddressPage from './pages/AddressPage'
import { AuthProvider } from './context/AuthContext';
import HappyCustomers from './pages/HappyCustomers'
import ResetPassword from './pages/Forget_Password';
import Necklaces from './pages/Necklaces';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';
import Earrings from './pages/Earrings';
import Bangles from './pages/Bangles';
import Elegant92 from './pages/92.5Silver';
import Occassions from './pages/Occassions';
import Collection from './pages/Collection';
import CelebCorner from './pages/CelebCorner';
import Accessories from './pages/Accessories';
import About from './molecule/About';
import Contact from './molecule/Contact';
import Site from './molecule/Site';
import Commitment from './molecule/Commitment';
import Mechanisms from './molecule/Mechanisms';
import Service from './molecule/Service';
import OfferAstha from './molecule/OfferAstha';
import Policy from './molecule/Policy';
import { indexCard } from './data';
import AboutPage from './components/AboutPage';

function App() {

  const [isLogin, setLogin]=useState(false);

  return (
    <div>
      <AuthProvider>
      <Header isLogin={isLogin} setLogin={setLogin}/>
      <Routes>
        <Route path="/" element={<Home indexCard={indexCard} isLogin={isLogin} />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route path='/Registration' element={<Registration setLogin={setLogin}/>} />
        <Route path='/HappyCustomers' element={<HappyCustomers/>} />
        <Route path='/CelebCorner' element={<CelebCorner/>} />
        <Route path='/Commitment' element={<Commitment/>} />
        <Route path='/Mechanisms' element={<Mechanisms/>} />
        <Route path='/Service' element={<Service/>} />
        <Route path='/OfferAstha' element={<OfferAstha/>} />
        <Route path='/Policy' element={<Policy/>} />
        <Route path='/Site' element={<Site/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Location' element={<Location/>} />
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/Wishlist' element={<WishlistLogin/>} />
        <Route path='/Necklaces' element={<Necklaces/>} />
        <Route path='/Bangles' element={<Bangles/>} />
        <Route path='/Occassions' element={<Occassions/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/AboutPage' element={<AboutPage/>} />


        <Route path='/92.5Silver' element={<Elegant92/>} />
        <Route path='/Accessories' element={<Accessories/>} />
        <Route path='/Earrings' element={<Earrings/>} />
        <Route path='/Forget_Password' element={<ResetPassword/>} />

        <Route path='/BuyNow' element={<BuyNow/>} />

        <Route path='/Dashboard' element={
          <ProtectedRoute isLogin={isLogin}>
            <Dashboard/>
          </ProtectedRoute>
        } />
        <Route path='/Dashboard/AddressPage' element={<AddressPage/>} />



      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
