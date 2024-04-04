import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { ThemeProvider } from './components/theme-provider'
import { RecoilRoot } from 'recoil'
import CreateProfile from './pages/CreateProfile'
import ReasonPage from './pages/ReasonPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import axios from 'axios'


export default function App() {

  return (
    <div className=''>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<RegisterPage />}/>
              <Route path='/createprofile' element={<CreateProfile />}/>
              <Route path='/reason' element={<ReasonPage />}/>
              <Route path='/verifyemail' element={<VerifyEmailPage />}/>
            </Routes>
          </BrowserRouter>
        </RecoilRoot>      
      </ThemeProvider>
    </div>
  )
}
