export function crudAPI(method, url, data) {
    return fetch(url, {
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
    .then(res => res.json())     
}

export function authCrudAPI(method, url, data) {
    // eslint-disable-next-line
    const token = localStorage.getItem(token);

    return fetch(url, {
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
    }).then(res => res.json())
        
}