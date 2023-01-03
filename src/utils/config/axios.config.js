import axios from "axios";


//configuracion predeterminada de axios
export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',
        responseType: 'json',
        timeout: 6000
    }
) 