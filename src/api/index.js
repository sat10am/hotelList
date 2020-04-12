
const baseURL = 'https://x0ofq07ykl.execute-api.ap-northeast-2.amazonaws.com/dev'



// TODO CORS 문제 해결 못 함 

function fetchApi(endpoint, {body, ...customConfig} = {}) {
    const headers = {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }
    const config = {
        method: body ? 'POST' : 'GET',
        mode: 'cors',
        credentials: "include",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }
    return window
            .fetch(`${baseURL}/${endpoint}`, config)
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

// const axiosApi = {
//     get: (endpoint, parms) => axios.get(`${baseURL}/${endpoint}`)
// };

export default fetchApi;