
const baseURL = 'http://localhost:5000'


function fetchApi(endpoint, {body, ...customConfig} = {}) {
    const headers = {
        'content-type': 'application/json',
    }
    const config = {
        method: body ? 'POST' : 'GET',
        mode: 'cors',
        credentials: "same-origin",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }
    return window
            .fetch(`${baseURL}${endpoint}`, config)
            .then(async res => {
                console.log('res', res);
                const data = res.json();
                if(res.ok) {
                    return data;
                }
                else {
                    return Promise.reject(data);
                }   
            })
};



export default fetchApi;