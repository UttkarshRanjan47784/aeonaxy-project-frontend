import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronRight } from "lucide-react"
import React from 'react'

export default function DefaultPhotoSelector() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center ml-10"><ChevronRight className="size-5 inline"/>
          <span className="text-xs md:text-base">Or choose one of our defaults</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
