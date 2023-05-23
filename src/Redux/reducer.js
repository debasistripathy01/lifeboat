

export const Reducer = (state, { type, payload }) => {

    switch (type) {

        case 'get/user':
            return {
                ...state,

            }
        case 'get/singleuser':
            return {
                ...state,
                // singleusersData: ,
            }
        default:
            return {
                ...state
            }
    }
}