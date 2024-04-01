import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function SignUpForm() {
  return (
    <form className='border-pink-300 px-10 py-3 md:px-32 grid grid-rows-8 gap-4 h-[600px]'>
        <h1 className='text-2xl font-bold'>Sign up to Dribble</h1>
        <div className='text-red-500'>username already taken</div>
        <div className='grid grid-cols-2 gap-3'>
            <div className='space-y-1'>
                <h4>Name</h4>
                <Input />
            </div>
            <div className='space-y-1'>
                <h4>Username</h4>
                <Input />
            </div>
        </div>
        <div className='space-y-1'>
            <h4>Email</h4>
            <Input />
        </div>
        <div className='space-y-1'>
            <h4>Password</h4>
            <Input />
        </div>
        <div>
            <p>Agree to Terms</p>
        </div>
        <Button>Sign Up</Button>
        <div>Disclaimer</div>
    </form>
  )
}
