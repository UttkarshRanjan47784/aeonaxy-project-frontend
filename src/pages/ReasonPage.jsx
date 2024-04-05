import ModeToggle from '@/components/mode-toggle'
import ReasonForm from '@/components/reason/ReasonForm'
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { requiredInfo } from '@/components/store/store'
import { useRecoilValue } from 'recoil'

export default function ReasonPage() {

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
        <div className='hidden md:block'>
            <span className='pacifico-regular mr-3 text-3xl text-primary'>dribbble</span>
        </div>
        <ReasonForm />
        <div className='hidden md:flex justify-end'>
            <ModeToggle />
        </div>
    </div>
  )
}
