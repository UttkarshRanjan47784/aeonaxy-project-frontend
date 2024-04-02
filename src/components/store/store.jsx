import { atom } from "recoil";

const imgTheme = atom({
    key : `imgTheme`,
    default : localStorage.getItem(`vite-ui-theme`)
})

const reasons = atom({
    key : `reasons`,
    default : []
})


export { imgTheme, reasons }