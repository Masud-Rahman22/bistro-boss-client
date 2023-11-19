import { useEffect, useState } from "react"

const useMenu = ()=>{
    const [menus,setMenu] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data =>{
            setMenu(data)
        })
    },[])
    return [menus]
}
export default useMenu;