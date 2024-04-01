import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { TriangleAlert } from 'lucide-react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'

export default function SignUpForm() {
  return (
    <form className='px-10 py-3 md:px-32'>
        <h1 className='text-2xl font-bold '>Sign up to Dribble</h1>
        <div className=' text-red-500 my-3'>username already taken</div>
        <div className='grid grid-cols-2 gap-3 my-3'>
            <div className='space-y-1'>
                <Label>Name</Label>
                <Input placeholder="Your name"/>
            </div>
            <div className='space-y-1'>
                <Label><TriangleAlert color="#db4242" className='hidden size-5 mr-1 inline-block'/>Username</Label>
                <Input placeholder="Username"/>
            </div>
        </div>
        <div className='space-y-1 my-3'>
            <Label>Email</Label>
            <Input placeholder="youremail@address.com"/>
        </div>
        <div className='space-y-1 my-3'>
            <Label>Password</Label>
            <Input placeholder="6+ characters"/>
        </div>
        <div className='my-3'>
            <div className='flex items-start space-x-3'>
                <Checkbox />
                <div className='grid gap-2'>
                    <Label className=''>Agree to Terms</Label>
                    <p className='text-xs text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sit amet mi viverra dapibus id eget quam. Fusce in magna leo. Aenean aliquet mauris sit amet hendrerit auctor.</p>
                </div>
            </div>
        </div>
        <Button className='w-1/2 my-3'>Sign Up</Button>
        <div className='my-3 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sit amet mi viverra dapibus id eget quam. Fusce in magna leo. Aenean aliquet mauris sit amet hendrerit auctor. Vestibulum scelerisque quis ante et cursus. Suspendisse dignissim imperdiet dui in malesuada. </div>
    </form>
  )
}
