export const getAPI = (path)=>{
    return fetch('http://localhost:8000/api/get'+ path)
    .then((response)=>{
        return response.json();
    });
};