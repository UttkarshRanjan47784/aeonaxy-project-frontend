import { Moon, Sun } from "lucide-react"
import { useSetRecoilState } from "recoil"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { imgTheme } from "./store/store"

 
export default function ModeToggle() {
  const { setTheme } = useTheme()
  const setImgTheme = useSetRecoilState(imgTheme)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {
          setImgTheme("light")
          setTheme("light")
          }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          setImgTheme("dark")
          setTheme("dark")
          }}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}