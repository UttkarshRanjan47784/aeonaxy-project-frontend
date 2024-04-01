import { atom } from "recoil";

const imgTheme = atom({
    key : `imgTheme`,
    default : localStorage.getItem(`vite-ui-theme`)
})

export { imgTheme }