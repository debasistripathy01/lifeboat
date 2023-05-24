import { memo } from "react"
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
        <div class="">
            {linkArr.map((el, i)=>{
                return <div key={i} class="border-b capitalize border-white block w-full py-3" >
                    <a href={`{/${id}/${el.link}}`}>{el.title}</a>
                </div>
            })}
        </div>
    )
}
export default memo(Navbar)