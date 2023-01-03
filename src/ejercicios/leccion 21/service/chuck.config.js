import axios from "axios";


//configuracion predeterminada de axios
export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io',
        responseType: 'json',
        timeout: 6000
    }
) 