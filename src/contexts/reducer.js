export const reducer = (state, action) => {
    switch (action.type) {
        case "UI_nav":
            return {
                ...state,
                focus: action.focus
            }
        case "UI_isLoading":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export const initialState = {
    focus: "home",
    isLoading: false
} 