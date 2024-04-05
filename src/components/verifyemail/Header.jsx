import React from 'react'
import ModeToggle from '../mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BriefcaseBusiness, Menu, Search, User } from 'lucide-react'
import { InputC } from '../ui/inputC'
import { Button } from '../ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useRecoilValue } from 'recoil'
import { optionalInfo } from '../store/store'


export default function Header() {

    const extrainfo = useRecoilValue(optionalInfo)

  return (
    <div className='flex items-center justify-between px-3 border-b border-input h-14'>
        <div className='hidden md:flex items-center h-full'>
            <div className='pacifico-regular mr-3 text-xl h-full flex items-center'>dribbble</div>
            <div className='hidden text-xs font-medium px-3 h-full md:flex items-center hover:bg-muted'>Inspiration</div>
            <div className='hidden text-xs font-medium px-3 h-full md:flex items-center hover:bg-muted'>Find Work</div>
            <div className='hidden text-xs font-medium px-3 h-full md:flex items-center hover:bg-muted'>Learn Design</div>
            <div className='hidden text-xs font-medium px-3 h-full md:flex items-center hover:bg-muted'>Go Pro</div>
            <div className='hidden text-xs font-medium px-3 h-full md:flex items-center hover:bg-muted'>Hire Designer</div>
        </div>
        <div className='md:hidden flex items-center h-full'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline"><Menu /></Button>
                </SheetTrigger>
                <SheetContent side='left'>
                    <SheetHeader>
                        <SheetTitle><div className='pacifico-regular mr-3 text-3xl h-full flex items-center'>dribbble</div></SheetTitle>
                    </SheetHeader>
                    <div className="mt-10 grid gap-4 py-4">
                        <div className='font-medium px-3 h-full md:flex items-center hover:bg-muted'>Inspiration</div>
                        <div className='font-medium px-3 h-full md:flex items-center hover:bg-muted'>Find Work</div>
                        <div className='font-medium px-3 h-full md:flex items-center hover:bg-muted'>Learn Design</div>
                        <div className='font-medium px-3 h-full md:flex items-center hover:bg-muted'>Go Pro</div>
                        <div className='font-medium px-3 h-full md:flex items-center hover:bg-muted'>Hire Designer</div>
                    </div>
                    <SheetFooter className='mt-10'>
                    <SheetClose asChild>
                        <Button type="submit">Upload</Button>
                    </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
        <div className='flex items-center space-x-2'>
            <form className='flex items-center bg-background px-3 rounded-md  border border-input'>
                <Search className='opacity-50 size-4'/>
                <InputC className='w-24 text-left h-8' placeholder='Search'></InputC>
            </form>
            <BriefcaseBusiness className='hidden size-7 text-muted-foreground opacity-75'/>
            <Avatar className='size-8'>
                <AvatarImage src={extrainfo.profileURL} />
                <AvatarFallback><User className='text-muted-foreground opacity-75'/></AvatarFallback>
            </Avatar>
            <Button className='hidden md:flex'>Upload</Button>
            <ModeToggle />
        </div>
    </div>
  )
}
