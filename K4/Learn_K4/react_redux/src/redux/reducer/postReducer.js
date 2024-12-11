const initialState= {
    postList: [],
}

const postReducer= (state= initialState, action)=>{
    switch(action.type){
        case "posts/fetch":
            return {...state, postList: action.payload}
        default: {
            return state
        }
    }
}

export default postReducer