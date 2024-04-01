import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import { ThemeProvider } from './components/theme-provider'
import { RecoilRoot } from 'recoil'


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RegisterPage />}/>
            <Route path=''/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>      
    </ThemeProvider>
  )
}
