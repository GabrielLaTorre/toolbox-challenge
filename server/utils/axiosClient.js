const axios = require('axios').default
let instance 


function getClient() {
    if(!instance) {
        instance = axios.create({
            baseURL: 'https://echo-serv.tbxnet.com',
            timeout: 3000,
            headers: {
                Authorization: 'Bearer aSuperSecretKey'
            }
        })
    }
    return instance
}

module.exports = {
    getClient
}