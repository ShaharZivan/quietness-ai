import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Quiet from './quiet.jsx'
import PaymentPage from './payment.jsx'
import SuccessPage from './success.jsx'
import SignInPage from './signin.jsx'
import PressKitPage from './presskit.jsx'
import ContactPage from './contact.jsx'
import CareersPage from './careers.jsx'
import StatusPage from './status.jsx'
import SecurityPage from './security.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiet />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/presskit" element={<PressKitPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
