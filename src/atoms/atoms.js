import { atom } from "recoil";

export const dataAtom = atom({
    key: 'dataAtom',
    default: []
})
export const imgAtom = atom({
    key: 'imgAtom',
    default:[]
})
export const displayImgAtom = atom({
    key: 'displayAtom',
    default:"",
})
export const imgCountAtom = atom({
    key: 'imgCountAtom',
    default:0
})
export const colorIndexAtom = atom({
    key: "colorIndexAtom",
    default: 0,
})
export const selectedIdAtom = atom({
    key: "selectedIdAtom",
    default: 0,
})
export const showImgAtom = atom({
    key: 'showImgAtom',
    default:false
})