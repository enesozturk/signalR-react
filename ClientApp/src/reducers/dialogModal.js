const initialDialogModalState = {
    open: false,
    title: null,
    content: null
}

export default (state = initialDialogModalState, action) => {
    switch (action.type) {
        case "SET_DIALOG_MODAL_STATE":
            return {
                ...state,
                open: action.payload.open,
                title: action.payload.title,
                content: action.payload.content
            }
        default:
            return state;
    }
}