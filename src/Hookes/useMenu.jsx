import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menus,setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data)
    //     })
    // },[])
    const { data: menus = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })
    return [menus, loading, refetch]
}
export default useMenu;