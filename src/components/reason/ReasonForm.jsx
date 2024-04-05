import React from 'react'
import ModeToggle from '../mode-toggle'
import { Button } from '../ui/button'
import { Card, CardContent, CardFooter } from '../ui/card'
import imgwhite2 from '../../assets/imgwhite2.jpg'
import imgdark from '../../assets/imgdark.jpg'
import { Checkbox } from '../ui/checkbox'
import { imgTheme, optionalInfo, reasons, requiredInfo } from '../store/store';
import { useRecoilState, useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import baseurl from '../../../helper.js'

export default function ReasonForm() {
    const iTheme = useRecoilValue(imgTheme);
    const [selectedReason, setSelectedReason] = useRecoilState(reasons)
    const reqInfo = useRecoilValue(requiredInfo);
    const extraInfo = useRecoilValue(optionalInfo);
    const navigate = useNavigate()

    const handleReason1 = (event) => {
        if (event){
            setSelectedReason((prev) => {
                let arr = [...prev];
                arr.push(1)
                return [...arr]
            })
        } else {
            setSelectedReason((prev) => {
                let arr = [...prev];
                arr = arr.filter((item) => item != 1)
                return [...arr]
            })
        }
    }

    const handleReason2 = (event) => {
        if (event){
            setSelectedReason((prev) => {
                let arr = [...prev];
                arr.push(2)
                return [...arr]
            })
        } else {
            setSelectedReason((prev) => {
                let arr = [...prev];
                arr = arr.filter((item) => item != 2)
                return [...arr]
            })
        }
    }

    const handleReason3 = (event) => {
        if (event){
            setSelectedReason((prev) => {
                let arr = [...prev];
                arr.push(3)
                return [...arr]
            })
        } else {
            setSelectedReason((prev) => {
                let arr = [...prev];
                arr = arr.filter((item) => item != 3)
                return [...arr]
            })
        }
    }

    const handleGoToVerifyEmail = async (event) => {
        event.preventDefault();
        let completeInfo = {
            ...reqInfo, 
            ...extraInfo,
            reason1 : selectedReason.includes(1),
            reason2 : selectedReason.includes(2),
            reason3 : selectedReason.includes(3),
            verified : false,
        }
        let response = await axios.post(`${baseurl}/sendverification`, completeInfo)
        setSelectedReason([])
        if (response.data.stat)
            navigate(`/verifyemail`);
        else{
            alert(`Error : ${response.data.msg}`)
        }
    }
    

  return (
    <form className='md:col-span-6 md:grid md:grid-rows-8 px-3 text-center pb-10 md:pb-0 md:mt-10'>
        <div className='md:hidden flex justify-between items-center mb-24'>
            <span className='pacifico-regular mr-3 text-3xl text-primary'>dribbble</span>
            <ModeToggle />
        </div>
        <div className='mx-3'>
            <h1 className='text-3xl font-extrabold'>What brings you to Dribbble?</h1>
                <p className='mt-3 text-muted-foreground'>Select the options that best describe you. Don't worry, you can explore other options later.</p>
        </div>
        <div className='row-span-6 my-10 md:my-8 mx-3 grid grid-cols-1 md:grid-cols-3 gap-3 space-y-10 md:space-y-0'>
            <Card className={selectedReason.includes(1)?"pt-2 max-h-96 grid grid-rows-8 border-primary border-2":"pt-2 max-h-96 grid grid-rows-4"}>
                <CardContent className={selectedReason.includes(1)?'space-y-3 row-span-7': 'space-y-3 row-span-3'}>
                    <img src={(iTheme == `dark`)?imgdark : imgwhite2} 
                    className={selectedReason.includes(1)?'h-48 w-52 mx-auto -translate-y-8 ': 'h-48 w-52 mx-auto '}/>
                    
                    <div className={selectedReason.includes(1)?'font-bold text-sm md:text-base -translate-y-8 -mt-10' : 'font-bold text-sm md:text-base'}>
                        I'm a designer looking to share my work
                    </div>
                    <div className={selectedReason.includes(1)?'text-[0.6rem] lg:text-xs -my-8 md:-translate-y-8' : `hidden`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sit amet mi viverra.</div>
                </CardContent>
                <CardFooter className='flex justify-center items-center'>
                    <Checkbox onCheckedChange={handleReason1} className='rounded-full'></Checkbox>
                </CardFooter>
            </Card>
            <Card className={selectedReason.includes(2)?"pt-2 max-h-96 grid grid-rows-8 border-primary border-2":"pt-2 max-h-96 grid grid-rows-4"}>
                <CardContent className={selectedReason.includes(2)?'space-y-3 row-span-7': 'space-y-3 row-span-3'}>
                    <img src={(iTheme == `dark`)?imgdark : imgwhite2} 
                    className={selectedReason.includes(2)?'h-48 w-52 mx-auto -translate-y-8 ': 'h-48 w-52 mx-auto '}/>
                    
                    <div className={selectedReason.includes(2)?'font-bold text-sm md:text-base -translate-y-8 -mt-10' : 'font-bold text-sm md:text-base'}>
                        I'm a designer looking to share my work
                    </div>
                    <div className={selectedReason.includes(2)?'text-[0.6rem] lg:text-xs -my-8 md:-translate-y-8' : `hidden`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sit amet mi viverra.</div>
                </CardContent>
                <CardFooter className='flex justify-center items-center'>
                    <Checkbox onCheckedChange={handleReason2} className='rounded-full'></Checkbox>
                </CardFooter>
            </Card>
            <Card className={selectedReason.includes(3)?"pt-2 max-h-96 grid grid-rows-8 border-primary border-2":"pt-2 max-h-96 grid grid-rows-4"}>
                <CardContent className={selectedReason.includes(3)?'space-y-3 row-span-7': 'space-y-3 row-span-3'}>
                    <img src={(iTheme == `dark`)?imgdark : imgwhite2} 
                    className={selectedReason.includes(3)?'h-48 w-52 mx-auto -translate-y-8 ': 'h-48 w-52 mx-auto '}/>
                    
                    <div className={selectedReason.includes(3)?'font-bold text-sm md:text-base -translate-y-8 -mt-10' : 'font-bold text-sm md:text-base'}>
                        I'm a designer looking to share my work
                    </div>
                    <div className={selectedReason.includes(3)?'text-[0.6rem] lg:text-xs -my-8 md:-translate-y-8' : `hidden`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sit amet mi viverra.</div>
                </CardContent>
                <CardFooter className='flex justify-center items-center'>
                    <Checkbox onCheckedChange={handleReason3} className='rounded-full'></Checkbox>
                </CardFooter>
            </Card>
        </div>
        <div>
            <div className={(selectedReason.length == 0)? `hidden font-bold mb-3` : `font-bold mb-3`}>Anything else? You can select multiple</div>
            <Button className='size-fit px-10' disabled={selectedReason.length == 0}
            onClick={handleGoToVerifyEmail}>Finish</Button>
        </div>
    </form>
  )
}
