export const deleteAPI = (path)=>{
    return fetch('http://localhost:8000/api/delete'+ path,{
        method: 'DELETE'
    })
    .then((response)=>{
        return response.json();
    });
};