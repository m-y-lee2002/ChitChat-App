export const getAPI = (path)=>{
    return fetch("http://localhost:8000/api/get")
    .then((response)=>{
        return response.json();
    });
};