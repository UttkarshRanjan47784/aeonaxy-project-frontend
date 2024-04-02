import React from 'react'
import ModeToggle from '@/components/mode-toggle'
import SignUpForm from './SignUpForm'

export default function RightContainer() {
  return (
    <div className='md:col-span-3 px-5 py-3 space-y-16 md:space-y-0 md:py-2'>        
        <div className='flex items-center justify-between'>
          <div>
            <span className='pacifico-regular mr-3 text-lg md:hidden'>dribble</span><ModeToggle />
          </div>
          <div>
            <span className='hidden md:inline-block'>Already a user?</span> <span className='cursor-pointer hover:underline'>Sign in</span>
          </div>
        </div>
        <SignUpForm />
    </div>
  )
}
