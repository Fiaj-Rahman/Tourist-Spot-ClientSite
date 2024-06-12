import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './assets/Components/Router/Router.jsx';
import FirebaseProvider from './assets/Components/RegisterLogComponent/FirebaseProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   <FirebaseProvider>
     <RouterProvider router={router} />
     <ToastContainer />
   </FirebaseProvider>

  </React.StrictMode>,
)
