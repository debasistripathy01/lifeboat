import React from "react";


const singleUserData = ({ name, id, handleClick }) => {

    return (
        <div onClick={()=> handleClick(id)} class='cursor-pointer flex gap-3 items-center border-b py-2'>
            <img class='rounded-full w-[7%]' src="https://avatars.githubusercontent.com/u/107462720?v=4" alt="" />
            <div class='text-md text-gray-700 font-[400]'>
                
            </div>

        </div>
    )
}