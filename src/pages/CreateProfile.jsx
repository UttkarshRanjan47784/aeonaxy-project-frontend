import ModeToggle from '@/components/mode-toggle'
import ProfileForm from '@/components/profileform/ProfileForm'
import React from 'react'

export default function CreateProfile() {
  return (
    <div className='md:grid md:grid-cols-6 h-dvh p-5 my-2 md:my-0'>
        <div className='hidden md:block'>
            <span className='pacifico-regular mr-3 text-3xl'>dribble</span>
        </div>
        <ProfileForm />
        <div className='hidden md:block md:flex justify-end'>
            <ModeToggle />
        </div>
    </div>
  )
}
