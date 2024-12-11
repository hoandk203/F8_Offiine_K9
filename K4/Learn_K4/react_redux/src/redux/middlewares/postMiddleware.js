export const getPosts= ()=>{
    return async(dispatch, _)=>{
        const response= await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data= await response.json()
        
        dispatch({
            type: "posts/fetch",
            payload: data,
        })
        
    }
}