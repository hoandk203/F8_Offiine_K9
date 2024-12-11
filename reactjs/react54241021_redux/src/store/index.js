import {createStore} from 'redux'

const initState= {
    count: 0,
    jobs: [],
    inputJob: {
        name: "",
        priority: "low",
    },
    searchStr: "",
}

const reducer= (state= initState, action)=>{
    switch (action.type) {
        case "count/increase":
            return {...state, count: state.count + action.payload}
        case "count/decrease":
            return {...state, count: state.count - action.payload}
        case "inputJob/name/update":
            return {...state, inputJob: {...state.inputJob, name: action.payload}}
        case "inputJob/priority/update":
            return {...state, inputJob: {...state.inputJob, priority: action.payload}}
        case "jobs/save":
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case "search/save":
        default:
            return state
    }
}

const store= createStore(reducer)

export default store
export * from './action.js'
export * from './selector.js'