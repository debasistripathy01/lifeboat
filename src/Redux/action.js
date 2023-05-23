export const GET_ALL_USERS = (items)=>{
    return {
        type: 'get/users',
        payload: items
    }
}


export const GET_SINGLE_USERS = (items)=>{
    return {
        type: 'get/singleusers',
        payload: items
    }
}