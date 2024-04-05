import { MailCheck } from 'lucide-react'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { optionalInfo, reasons, requiredInfo } from '../store/store'
import axios from 'axios'

export default function VerifyMailMessage() {

  const [reqInfo, setReqInfo] = useRecoilState(requiredInfo)
  const extraInfo = useRecoilValue(optionalInfo);
  const reasonList = useRecoilValue(reasons)

  function ValidateEmail(input) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;      
    if (input.match(validRegex)) { 
      return true;      
    } else {
      return false;
    }
  }

  const handleResend = async () => {
    let response = await axios.post(`http://localhost:5000/sendverification`, {})
  }


  const handleChangeEmail = async () => {
    let oldValue = {...reqInfo}; //saving old value
    let newEmail = window.prompt(`Enter New Email`);
    if (newEmail.length == 0){
      alert(`No email`);
      return;
    }
    if (!ValidateEmail(newEmail)){
      alert(`Invalid email`);
      return;
    }
    if(newEmail == reqInfo.email){
      alert(`Old email and new email cannot be same`);
      return;
    }

    //frontend update (optimistic rendering)
    setReqInfo((prev)=> {
      return {
        ...prev,
        email : newEmail
      }
    });

    //backend update
   try {
      let response = await axios.post(`http://localhost:5000/emailchange`, {
        username : reqInfo.username,
        newEmail : newEmail,
        verified : false
      })
      if (response.data.stat)
        alert(`Verification mail sent to new email address`);
      else{
        throw new Error(response.data.msg)
      }
   } catch (error) {
      //rolling back frontend changes
      alert(`Operation failed : ${error.message}`);
      setReqInfo({...oldValue});
   }
  }

  return (
    <div className='row-span-11 flex justify-center items-center px-5'>
        <div className='grid grid-rows-7 text-center justify-center items-center'>
            <h1 className='text-3xl md:text-5xl'>Please verify your email...</h1>
            <MailCheck className='text-primary size-16 w-24 mx-auto' />
            <div className='text-lg md:text-xl font-semibold'>Please verify you email address. We have sent a confirmation email to:</div>
            <div className='text-lg md:text-xl font-bold'>{reqInfo.email}</div>
            <div className='text-lg md:text-xl font-semibold'>Click the confirmation link in the email to begin using Dribbble.</div>
            <div className='text-lg md:text-xl font-semibold'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter.<br /> If you still don't see it, you can <span className='hover:underline text-primary cursor-pointer' onClick={handleResend}>resend the confirmation email.</span></div>
            <div className='text-lg md:text-xl font-semibold'>Wrong email address? <span className='hover:underline text-primary cursor-pointer' onClick={handleChangeEmail}>Change it</span></div>
        </div>
    </div>
  )
}
