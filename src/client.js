const axios = require("axios");
const rc = axios.create({
    baseURL: 'http://localhost:5572'
})

module.exports = rc