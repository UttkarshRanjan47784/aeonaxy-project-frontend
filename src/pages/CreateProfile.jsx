import ModeToggle from '@/components/mode-toggle'
import ProfileForm from '@/components/profileform/ProfileForm'
import { requiredInfo } from '@/components/store/store'
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

import { useRecoilValue } from 'recoil'

export default function CreateProfile() {

  const navigate = useNavigate()
  let temp = useRecoilValue(requiredInfo);

  useEffect(()=>{
    if (temp.name.length == 0 || temp.username.length == 0 || temp.password.length == 0 || temp.email.length == 0){
      alert(`Please fill the required details on the sign up page.`);
      navigate(`/`)
    }
  }, [])

  return (
    <div className='md:grid md:grid-cols-8 h-dvh p-5 my-2 md:my-0'>
        <div className='hidden md:block col-span-2'>
            <span className='pacifico-regular mr-3 text-3xl text-primary'>dribbble</span>
        </div>
        <ProfileForm />
        <div className='hidden md:flex justify-end'>
            <ModeToggle />
        </div>
    </div>
  )
}
