export default function (state, action) {
    switch (action.type) {
        case "inputJob/name/update":
            return {
                ...state,
                name: action.payload,
            };
        case "inputJob/priority/update":
            return {
                ...state,
                priority: action.payload,
            };
        default:
            return state;
    }
}
