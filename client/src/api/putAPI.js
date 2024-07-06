export const putAPI =(data_object, path)=>{
    return fetch('http://localhost:8000/api/put'+ path,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_object),
    }).then((response)=>{
        return response.json();
    });
}