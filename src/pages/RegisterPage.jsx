import React from 'react'
import LeftContainer from '@/components/register/LeftContainer.jsx'
import RightContainer from '@/components/register/RightContainer.jsx'

export default function RegisterPage() {

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 h-dvh'>
        <LeftContainer />
        <RightContainer />
    </div>
  )
}
