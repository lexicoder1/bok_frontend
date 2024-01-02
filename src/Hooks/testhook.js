import {useState} from "react"
 
const useTest = (val) => {
    const [toggle, settoggle] = useState(val);
 

    return toggle
}

export default useTest