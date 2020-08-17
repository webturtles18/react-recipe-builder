import axios from 'axios';

const inst = axios.create({
    baseURL: "http://larademo58.local.com/api/",
});

// inst.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";

export default inst;