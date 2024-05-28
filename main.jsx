import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AllPost from './AllPost.jsx';
import Cart from './Cart.jsx';
import Cartbuilder from './Cartbuilder.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import Product from './Product.jsx';
import Profile from './Profile.jsx'
const router=createBrowserRouter([{
      path:"/",
      element:<App/>,
      children:[{
        path:"/Home",
        element:<AllPost/>,
        loader:async ()=>{
          let url="https://fakestoreapi.com/products";
          let value=await fetch(url);
          let newval=await value.json();
          return newval;
        }
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      {
        path:"/:Productid",
        element:<Product/>,
        loader:async ()=>{
          let url="https://fakestoreapi.com/products";
          let value=await fetch(url);
          let newval=await value.json();
          return newval;
        }
      },
      {
        path:"/Profile",
        element:<Profile/>
      }
    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-epshl7mvfwgpe84p.us.auth0.com"
    clientId="spijsvsIt6CldrhHQvqjerfsSM2qt2Wg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </Auth0Provider>
)