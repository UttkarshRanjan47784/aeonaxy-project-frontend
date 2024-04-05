import { atom } from "recoil";

const imgTheme = atom({
    key : `imgTheme`,
    default : localStorage.getItem(`vite-ui-theme`)
})

const reasons = atom({
    key : `reasons`,
    default : []
})

const requiredInfo = atom({
    key : `requiredInfo`,
    default : {
        name : ``,
        email : ``,
        username : ``,
        password : ``,
    }
})

const optionalInfo = atom({
    key : `optionalInfo`,
    default : {
        profileURL : ``,
        location : ``,
    }
})

export { imgTheme, reasons, requiredInfo, optionalInfo }