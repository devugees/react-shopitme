export const crudAPI = async (method, endPoint, data) => {    
    const response = await fetch(endPoint, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'user-agent': 'NachoMerino',
            'content-type': 'application/json'
        },
        method: method,
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;      
}

export function authCrudAPI(method, endPoint, data) {
    const token = localStorage.getItem('token');
    // to avoid the 401 error if no token
    if(!token){
      const myPromise = new Promise(resolve => { resolve('Unauthorized') } )
      return myPromise
    }

    return fetch(endPoint, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'user-agent': 'NachoMerino',
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        method: method,
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    }).then(response => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json()
        } else {
          return response.text()
        }
      })
    .catch(err => console.log('You are not auth.',err))
}

export function authCrudFileAPI(endPoint, file) {
    // eslint-disable-next-line
    const token = localStorage.getItem('token');

    return fetch(endPoint, {
        body: file,
        cache: 'no-cache',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        method: "POST",
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    }).then(res => res.json())   
}