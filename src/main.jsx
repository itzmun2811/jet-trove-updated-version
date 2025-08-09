import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'aos/dist/aos.css';
import Aos from 'aos';

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ToastContainer position="top-right" autoClose={3000} />
    <AuthProvider>
  <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
