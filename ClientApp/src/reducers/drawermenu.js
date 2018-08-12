const initialDrawerMenuState = {
    open: false
}

export default (state = initialDrawerMenuState, action) => {
    switch (action.type) {
        case "SET_DRAWER_MENU_STATE":
            return {
                ...state,
                open: action.payload
            }
        default:
            return state;
    }
}