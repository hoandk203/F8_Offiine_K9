const onIncreaseCount= (payload = 1)=>{
    return {
        type: "count/increase",
        payload: payload,
    }
}

const onDecreaseCount= (payload= 1)=>{
    return {
        type: "count/decrease",
        payload: payload,
    }
}

const onUpdateInputJob= (name, payload)=>{
    return {
        type:`inputJob/${name}/update`,
        payload: payload,
    }
}

const onSaveJob= (payload)=>{
    return {
        type: "jobs/save",
        payload: payload
    }
}

export {onIncreaseCount, onDecreaseCount, onUpdateInputJob, onSaveJob}