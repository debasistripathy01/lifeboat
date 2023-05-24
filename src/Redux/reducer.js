

export const Reducer = (state, { type, payload }) => {

    switch (type) {

        case 'get/user':
            return {
                ...state,
                userData: payload

            }
        case 'get/singleuser':
            return {
                ...state,
                singleUsersData: getSingleUserData(payload, state.userData),
            }
        default:
            return state
    }
}


function getSingleUserData(id, Data){
    let foundSingleUserData = Data.filter((el, i)=>{
        return el.id === +id;
    });
    return foundSingleUserData[0];
}