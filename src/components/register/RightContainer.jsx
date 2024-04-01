import React from 'react'
import ModeToggle from '@/components/mode-toggle'
import SignUpForm from './SignUpForm'

export default function RightContainer() {
  return (
    <div className='md:col-span-3 px-5 py-3 space-y-24 md:space-y-0 md:py-2'>        
        <div className='flex items-center justify-between'>
          <ModeToggle />
          <div>
            Already a user? <span className='cursor-pointer'>Sign in</span>
          </div>
        </div>
        <SignUpForm />
    </div>
  )
}
