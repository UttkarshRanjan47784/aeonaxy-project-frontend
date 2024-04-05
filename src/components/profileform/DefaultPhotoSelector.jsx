import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronRight } from "lucide-react"
import React from 'react'
import { useSetRecoilState } from "recoil"
import { optionalInfo} from "../store/store"

export default function DefaultPhotoSelector() {

  const setPicLink = useSetRecoilState(optionalInfo)

  const handleSelect = (event) => {
    switch(event.target.innerText){
      case "Rick and Morty" : console.log(1)
        setPicLink((prev) => {
          return {
            ...prev,
            profileURL : "https://github.com/shadcn.png"
          }
        })
      break
      case "Baby Yoda" : console.log(2)
        setPicLink((prev) => {
          return {
            ...prev,
            profileURL : "https://github.com/shadcn.png"
          }
        })
      break
      case "Anonymous" : console.log(3)
        setPicLink((prev) => {
          return {
            ...prev,
            profileURL : "https://github.com/shadcn.png"
          }
        })
      break
      case "Cowboy" : console.log(4)
        setPicLink((prev) => {
          return {
            ...prev,
            profileURL : "https://github.com/shadcn.png"
          }
        })
      break
    }
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center ml-10"><ChevronRight className="size-5 inline"/>
          <span className="text-xs md:text-base">Or choose one of our defaults</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onClick={handleSelect}>Rick and Morty</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSelect}>Baby Yoda</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSelect}>Anonymous</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSelect}>Cowboy</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
