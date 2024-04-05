import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import DefaultPhotoSelector from './DefaultPhotoSelector'
import { InputB } from '../ui/inputB'
import ModeToggle from '../mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Camera } from 'lucide-react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { optionalInfo, requiredInfo } from '../store/store'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import baseurl from '../../../helper.js'


export default function ProfileForm() {

    const fileBrowse = useRef(null);
    const [extraInfo, setExtraInfo] = useRecoilState(optionalInfo);
    const reqInfo = useRecoilValue(requiredInfo)
    const navigate = useNavigate();
    const [uploading, setUploading] = useState(false)

    const handleOpenExplorer = (event) => {
        event.preventDefault()
        fileBrowse.current.click()
    }
    const handleNewPhoto = async (event) => {
        let oldValue = {...extraInfo};
        try {
            //frontend update
            setExtraInfo((prev) => {
                return {
                    ...prev,
                    profileURL : URL.createObjectURL(event.target.files[0])
                }
            })
            //backend
            setUploading(true)
            const formData = new FormData();
            formData.append(`file`, event.target.files[0]);
            formData.append(`username`, reqInfo.username);
            let response = await axios.post(`${baseurl}/uploadprofilepic`, formData)
            if (response.data.stat){
                console.log(response.data);
                setExtraInfo((prev) => {
                    return {
                        ...prev,
                        profileURL : response.data.msg
                    }
                })
                setUploading(false)
            }
            if (!response.data.stat){
                throw new Error(response.data.msg);
            }
        } catch (error) {
            alert(`Op failed : ${error.message}`)
            setUploading(false);
            setExtraInfo({...oldValue})
        }
    }
    const handleGoToReasons = async (event) => {
        event.preventDefault();
        // let response  = await axios.post()
        navigate(`/reason`);
    }

    const handleLocChange = (event) => { setExtraInfo((prev) => {
        return {
            ...prev,
            location : event.target.value
        }
    }) }


  return (
    <form className='md:col-span-5 md:grid md:grid-rows-8 px-3'>
        <div className='md:hidden flex justify-between items-center mb-24'>
            <span className='pacifico-regular mr-3 text-3xl text-primary'>dribbble</span>
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
                <Avatar className='size-24 md:size-36 '>
                    <AvatarImage src={extraInfo.profileURL} />
                    <AvatarFallback className='border-2 border-dashed border-foreground'><Camera className='text-muted-foreground opacity-75 size-10'/></AvatarFallback>
                </Avatar>
                <div className='col-span-3 space-y-4'>
                
                    <Button variant="ghost2" className='ml-10' onClick={handleOpenExplorer} >Choose image</Button>
                        <input onChange={handleNewPhoto} id="picture" className="hidden" type="file" ref={fileBrowse} />  
                    <br />
                    <DefaultPhotoSelector />
                </div>
            </div>
        </div>
        <div className='row-span-3 my-10 md:my-0 mx-3'>
            <h3 className='font-bold text-lg'>Add your Location</h3>
            <InputB placeholder='Enter a location' className='mt-6'  value={extraInfo.location}
            onChange={handleLocChange} />
            <Button className='mt-8 w-36' disabled={extraInfo.profileURL.length == 0 || uploading} onClick={handleGoToReasons}>{uploading? `Uploading...`: `Next`}</Button>
        </div>
    </form>
  )
}
