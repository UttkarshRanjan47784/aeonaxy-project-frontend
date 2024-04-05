import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { TriangleAlert, Ellipsis } from 'lucide-react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { requiredInfo } from '../store/store'
import baseurl from '../../../helper.js'


export default function SignUpForm() {

    const [err, setErr] = useState({
        stat : false,
        msg : ``
    });
    const errString = (err.stat)? 'size-5 mr-1 inline-block' : 'hidden size-5 mr-1 inline-block'
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [username, setUsername] = useState(``);
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [loading, setLoading] = useState(false)

    const [userInfo, setUserInfo] = useRecoilState(requiredInfo)

    function ValidateEmail(input) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;      
        if (input.match(validRegex)) { 
          return true;      
        } else {
          return false;
        }
      }

      useEffect(()=>{
        if (userInfo == null || userInfo == undefined){
            return
        }
        else {
            setUsername(userInfo.username);
            setName(userInfo.name);
            setEmail(userInfo.email);
            setPassword(userInfo.password);
        }
      }, [])

    const handleEnable = (event) => { setAgree(event) }

    const handleGoToCreateProfile = async (event) => {
        event.preventDefault();
        if(name.length == 0){
            setErr({
                stat: true,
                msg: `name`
            })
            return;
        }
        if( username.length == 0){
            setErr({
                stat: true,
                msg: `username`
            })
            return;
        }
        if(email.length == 0){
            setErr({
                stat: true,
                msg: `email`
            })
            return;
        }
        if (!ValidateEmail(email)){
            setErr({
                stat: true,
                msg: `email`
            })
            return;
        }
        if(password.length < 6){
            setErr({
                stat: true,
                msg: `password`
            })
            return;
        }
        setErr({
            stat: false,
            msg: ``
        })
        setLoading(true)
        let userReqInfo = {
            name : name,
            username : username,
            email : email,
            password : password
        }
        let response = await axios.post(`${baseurl}/registeruser`, {
            name : name,
            email: email,
            username : username,
            password: password
        });
        if (response.data.stat){
            setUserInfo(userReqInfo)
            setLoading(false)
            navigate(`/createprofile`)
        }
        else{
            setLoading(false)
            if (response.data.msg == `duplicate key value violates unique constraint "userinfo_username_key"`)
                setErr({
                    stat: true,
                    msg: `username`
                })
            alert(`Operations failed : ${response.data.msg}`)
        }
    }

    const handleNameChange = (event) => {setName(event.target.value)}
    const handleUsernameChange = (event) => {setUsername(event.target.value)}
    const handleEmailChange = (event) => {setEmail(event.target.value)}
    const handlePasswordChange = (event) => {setPassword(event.target.value)}

  return (
    <form className='px-10 py-3 md:px-32'>
        <h1 className='text-2xl font-bold '>Sign up to Dribble</h1>
        <div className={err.stat? ' text-red-500 my-3' : ' hidden text-red-500 my-3'}>{(err.msg == `username`)?(username.length == 0)? `Username cannot be empty` : `Username taken` : (err.msg == `password`)? `Password length must be 6 or more characters` : (err.msg == 'email')? (email.length == 0)? `Email cannot be empty` : `Please enter proper email` : `Name cannot be empty`}</div>
        <div className='grid grid-cols-2 gap-3 my-3'>
            <div className='space-y-1'>
                <Label><TriangleAlert color="#db4242" 
                className={(err.stat && err.msg=='name')?'size-5 mr-1 inline-block' : 'hidden size-5 mr-1'}/>Name</Label>
                <Input onChange={handleNameChange} value={name} placeholder="Your name"/>
            </div>
            <div className='space-y-1'>
                <Label><TriangleAlert color="#db4242" 
                className={(err.stat && err.msg=='username')?'size-5 mr-1 inline-block' : 'hidden size-5 mr-1'}/>Username</Label>
                <Input onChange={handleUsernameChange} value={username} placeholder="Username"/>
            </div>
        </div>
        <div className='space-y-1 my-3'>
            <Label><TriangleAlert color="#db4242" 
            className={(err.stat && err.msg=='email')?'size-5 mr-1 inline-block' : 'hidden size-5 mr-1'}/>Email</Label>
            <Input onChange={handleEmailChange} value={email} placeholder="youremail@address.com"/>
        </div>
        <div className='space-y-1 my-3'>
            <Label><TriangleAlert color="#db4242" 
            className={(err.stat && err.msg=='password')?'size-5 mr-1 inline-block' : 'hidden size-5 mr-1'}/>Password</Label>
            <Input onChange={handlePasswordChange} type="password" value={password} placeholder="6+ characters"/>
        </div>
        <div className='my-3'>
            <div className='flex items-start space-x-3'>
                <Checkbox onCheckedChange={handleEnable} />
                <div className='grid gap-2'>
                    <Label className=''>Agree to Terms</Label>
                    <p className='text-xs text-muted-foreground'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sit amet mi viverra dapibus id eget quam. Fusce in magna leo. Aenean aliquet mauris sit amet hendrerit auctor.</p>
                </div>
            </div>
        </div>
        <Button className='w-1/2 my-3' disabled={(agree == false || loading)} onClick={handleGoToCreateProfile}>{loading?`Signing You Up...`:`Sign Up`}</Button>
        <div className='my-3 text-xs'>Disclaimer : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sit amet mi viverra dapibus id eget quam. Fusce in magna leo. Aenean aliquet mauris sit amet hendrerit auctor. </div>
    </form>
  )
}
