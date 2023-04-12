import './App.css';
import { NavBar } from './Components/publicComponents/navbar';
import { SocialNet } from './Components/publicComponents/Socialnet';
import { Index } from './Components/publicComponents/Index';
import { About } from './Components/publicComponents/about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Login } from './Components/privateComponents/login';
import { SignUp } from './Components/privateComponents/signup';
import { Profile } from './Components/privateComponents/profile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthState } from './Redux/slice/user'
import { store } from './Redux/store.config';
import { ProtectedRoute } from './Components/privateComponents/privateSite';
import { Sell } from './Components/privateComponents/sellpage';
import { CreateShops } from './Components/privateComponents/createShop';
import { ShopList } from './Components/privateComponents/shopList';
import { ShopProfile } from './Components/privateComponents/shopProfile';
import { ShopPublicList } from './Components/publicComponents/shops'
import { CreateProduct } from './Components/privateComponents/createProduct';
import { useGetShopsData } from './Components/Controllers/fetch';

function App() {

  const dispatch = useDispatch();
  const Authenticated = useSelector(state => state.session.isAuthenticated);
  const [shops, products, fetchProducts] = useGetShopsData();
  useEffect(() => {
    setInterval(() => {
      dispatch(checkAuthState());
    }, 5000)
  }, [dispatch, Authenticated]);
  const { isAuthenticated, storeS } = store.getState().session;
  return (
    <Router>
      <NavBar />
      <SocialNet />
      <AnimatePresence mode="wait">
        <Routes>
          <Route exact path='/' element={<motion.div
            key="index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }}>
            <Index allProducts={products} /></motion.div>} />
          <Route exact path='/shops' element={<motion.div
            key="ShopPublicList"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }}>
            <ShopPublicList shopList={shops} /></motion.div>} />
          <Route exact path='/about' element={<motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0 }}>
            <About /></motion.div>} />
          <Route exact path='/signup' element={
            <ProtectedRoute
              isAllowed={!isAuthenticated}
              redirectTo={"/profile"}
            >
              <motion.div
                key="signup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <SignUp />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/signin' element={
            <ProtectedRoute
              isAllowed={!isAuthenticated}
              redirectTo={"/profile"}
            >
              <motion.div
                key="signin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Login />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/shopping' element={<motion.div
            key="shopping"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}><Index /></motion.div>} />
          <Route exact path='/profile' element={
            <ProtectedRoute
              isAllowed={isAuthenticated}
              redirectTo={"/"}
            >
              <motion.div
                key="profile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Profile />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/sell' element={
            <ProtectedRoute
              isAllowed={isAuthenticated}
              redirectTo={"/"}
            >
              <motion.div
                key="Sell"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Sell />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/user/newshop' element={
            <ProtectedRoute
              isAllowed={isAuthenticated}
              redirectTo={"/"}
            >
              <motion.div
                key="newShop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <CreateShops />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/user/shops' element={
            <ProtectedRoute
              isAllowed={storeS}
              redirectTo={"/"}
            >
              <motion.div
                key="listShops"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <ShopList />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/user/shops/:idShop' element={
            <ProtectedRoute
              isAllowed={storeS}
              redirectTo={"/"}
            >
              <motion.div
                key="ShopProfile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <ShopProfile />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/shop/:idShop/addproduct' element={
            <ProtectedRoute
              isAllowed={storeS}
              redirectTo={"/user/shops"}
            >
              <motion.div
                key="addProduct"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <CreateProduct />
              </motion.div>
            </ProtectedRoute>
          } />
          <Route exact path='/products' element={<motion.div
            key="products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}><Index /></motion.div>} />
        </Routes>
      </AnimatePresence>
    </Router >
  );
}

export default App;


//revisar el enrutamiento, a la hora de estar en una cuenta de administrador
//revisar

