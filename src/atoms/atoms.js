import { atom } from "recoil";
export default function getData() {
    const productData = localStorage.getItem('productData')
    if (productData) {
        try {
            return JSON.parse(productData)
        }
            catch {
                return []
            }
        
    }
    return []
}

export const dataAtom = atom({
    key: 'dataAtom',
    default: getData()
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