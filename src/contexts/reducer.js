export const reducer = (state, action) => {
    switch (action.type) {
        case "nav":
            return {
                ...state,
                focus: action.focus
            }
        default:
            return state
    }
}

export const initialState = {
    focus: "home"
} 