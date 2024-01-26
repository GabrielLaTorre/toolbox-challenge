import axios from 'axios'
let instance 


export function getClient(baseURL) {
    if(!instance) {
        instance = axios.create({
            baseURL: baseURL || 'https://echo-serv.tbxnet.com',
            timeout: 3000,
            headers: {
                Authorization: 'Bearer aSuperSecretKey'
            }
        })
    }
    return instance
}
