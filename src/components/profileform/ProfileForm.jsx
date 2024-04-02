import React from 'react'
import { Button } from '../ui/button'
import DefaultPhotoSelector from './DefaultPhotoSelector'
import { InputB } from '../ui/inputB'
import ModeToggle from '../mode-toggle'

export default function ProfileForm() {


    const handleNewPhoto = (event) => {
        event.preventDefault();
    }


  return (
    <form className='md:col-span-4 md:grid md:grid-rows-8 px-3'>
        <div className='md:hidden flex justify-between items-center mb-24'>
            <span className='pacifico-regular mr-3 text-3xl'>dribble</span>
            <ModeToggle />
        </div>
        <div className='hidden md:block'></div>
        <div className='mx-3'>
            <h1 className='text-3xl font-extrabold'>Welcome! Let's create your profile</h1>
                <p className='mt-3 text-muted-foreground'>Let's get others to know you better! You can do these later</p>
        </div>
        <div className='row-span-3 py-5 space-y-3 my-6 md:my-0 mx-3'>
            <h3 className='font-bold text-lg'>Add an Avatar</h3>
            <div className='grid grid-cols-4 gap-5'>
                <div className='rounded-full size-24 md:size-36 border-2 border-dashed border-foreground '></div>
                <div className='col-span-3 space-y-4'>
                    <Button variant="ghost2" className='ml-10' onClick={handleNewPhoto} >Choose image</Button>
                    <br />
                    <DefaultPhotoSelector />
                </div>
            </div>
        </div>
        <div className='row-span-3 my-10 md:my-0 mx-3'>
            <h3 className='font-bold text-lg'>Add your Location</h3>
            <InputB placeholder='Enter a location' className='mt-6' />
            <Button className='mt-8 w-36'>Next</Button>

        </div>
    </form>
  )
}
