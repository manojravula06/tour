import axios from 'axios';
import { BASE_URL,TIME_OUT } from '../config/Config';

axios.defaults.headers.common['Content-Type']='application/json';
axios.defaults.headers.common['Accept']='application/json';

export const AxiosInstance=axios.cerate({
    baseURL:BASE_URL,
    timeout:TIME_OUT
})