const initialState = {

}
const cashReducer = (state  = initialState, action) => {
    switch (action.type){
        case 'GET_CASH' :
            return {...state}
        case 'REMOVE_CASE':
            return
        default :
            return state
    }
}