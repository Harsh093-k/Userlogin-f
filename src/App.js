import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/PR.jsx';

const browserRouter = createBrowserRouter([
  {
  
        path: '/',
        element: <ProtectedRoute><Home /></ProtectedRoute>
      },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgot-password',
    element:<ForgotPassword /> 
  },
  {
    path: '/signup',
    element: <Signup />
  },
])
function App() {

  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
