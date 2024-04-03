import Footer from '@/components/verifyemail/Footer'
import Header from '@/components/verifyemail/Header'
import VerifyMailMessage from '@/components/verifyemail/VerifyMailMessage'
import React from 'react'


export default function VerifyEmailPage() {
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
