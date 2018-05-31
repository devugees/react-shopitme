export const crudAPI = async (method, endPoint, data) => {
    console.log('data here',data);
    
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
    // eslint-disable-next-line
    const token = localStorage.getItem('token');

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
    }).then(res => res.json())   
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