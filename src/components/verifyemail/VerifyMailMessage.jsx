import { MailCheck } from 'lucide-react'
import React from 'react'

export default function VerifyMailMessage() {
  return (
    <div className='row-span-11 flex justify-center items-center px-5'>
        <div className='grid grid-rows-7 text-center justify-center items-center'>
            <h1 className='text-3xl md:text-5xl'>Please verify your email...</h1>
            <MailCheck className='text-primary size-16 w-24 mx-auto' />
            <div className='text-lg md:text-xl font-semibold'>Please verify you email address. We have sent a confirmation email to:</div>
            <div className='text-lg md:text-xl font-bold'>utr.1206@gmail.com</div>
            <div className='text-lg md:text-xl font-semibold'>Click the confirmation link in the email to begin using Dribbble.</div>
            <div className='text-lg md:text-xl font-semibold'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter.<br /> If you still don't see it, you can <span className='hover:underline text-primary'>resend the confirmation email.</span></div>
            <div className='text-lg md:text-xl font-semibold'>Wrong email address? <span className='hover:underline text-primary'>Change it</span></div>
        </div>
    </div>
  )
}
