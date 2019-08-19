export function PostData(type, userData){
    let BaseURL = 'https://sleepy-basin-81018.herokuapp.com';

    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type,{
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((Response) => Response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
} 