import Footer from '@/components/verifyemail/Footer'
import Header from '@/components/verifyemail/Header'
import VerifyMailMessage from '@/components/verifyemail/VerifyMailMessage'
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { requiredInfo } from '@/components/store/store'
import { useRecoilValue } from 'recoil'


export default function VerifyEmailPage() {
  const navigate = useNavigate()
  let temp = useRecoilValue(requiredInfo);

  useEffect(()=>{
    if (temp.name.length == 0 || temp.username.length == 0 || temp.password.length == 0 || temp.email.length == 0){
      alert(`Please fill the required details on the sign up page.`);
      navigate(`/`)
    }
  }, [])
  return (
    <div className='grid grid-rows-4 md:grid-rows-7'>
      <div className='row-span-4 grid grid-rows-12 h-dvh'>
        <Header />
        <VerifyMailMessage />
      </div>
      <Footer />
    </div>
  )
}
