import axios from 'axios';

export const contacts = axios.create({
    baseURL: `http://api.icndb.com/jokes/random/10`
})