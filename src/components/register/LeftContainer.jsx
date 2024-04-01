import React from 'react'
import imgdark from '../../assets/imgdark.jpg'
import imgwhite from '../../assets/imgwhite2.jpg'
import { imgTheme } from '../store/store';
import { useRecoilValue } from 'recoil';


export default function LeftContainer() {

  const iTheme = useRecoilValue(imgTheme);

  return (
    <div className='p-5 bg-cover bg-bottom hidden md:block md:col-span-2'
    style={(iTheme == `dark`)?{backgroundImage: `url(${imgdark})`} : {backgroundImage: `url(${imgwhite})`}}>

    </div>
  )
}
