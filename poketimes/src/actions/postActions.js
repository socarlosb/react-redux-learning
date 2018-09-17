export const deletePost =(id)=>{
    return {
        type: 'DELETE_POST',
        // id: id // if the property and the value is the same
        // we can just use:
        id
    }
}