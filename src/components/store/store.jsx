import { atom } from "recoil";

const imgTheme = atom({
    key : `imgTheme`,
    default : localStorage.getItem(`vite-ui-theme`)
})

const reasons = atom({
    key : `reasons`,
    default : []
})

const profilePicURL = atom({
    key: `profilePicURL`,
    default : ``
})

const requiredInfo = atom({
    key : `requiredInfo`,
    default : null
})

export { imgTheme, reasons, profilePicURL, requiredInfo }