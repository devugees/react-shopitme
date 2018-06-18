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

export const date = new Date();
export const day = date.getDate();
export const month = date.getMonth()+1;
export const year = date.getFullYear();
export const timeHours = date.getHours();
export let timeMin = date.getMinutes();
export const zeroMonth = (month > 9)? (month): ('0' + month);
export const zeroMin = (timeMin > 9)? (timeMin): ('0' + timeMin);
export const zeroDay = (day > 9)? (day): ('0' + day);
export const createdate = `${zeroDay}/${zeroMonth}/${year} ${timeHours}:${zeroMin}`
