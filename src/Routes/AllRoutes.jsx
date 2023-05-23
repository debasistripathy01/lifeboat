import { useParams } from "react-router-dom"



const linkArr = [
    {link: "", title: "Profile"},
    {link: "posts", title: "post"},
    {link: "gallery", title: "Gallery"},
    {link: "toDo", title: "toDo"},
]

export const Navbar =()=>{
    const { id } = useParams()

    return (
        <div>
            
        </div>
    )
}