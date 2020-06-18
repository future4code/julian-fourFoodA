export const initialState = {
    address:[]
}

export const fullAddressReducer = (state, action) => {
    switch (action.type) {
        case "SET_FULL_ADDRESS":
            return {
                ...state,
                address: action.address
            };
        default:
        return state;
    }
}