import APIRequest from '../utils/config/axios.config'

export function getRandomUser() {
    return APIRequest.get('/', {               //https://randomuser.me/api/ 
        validateStatus: function (status) {
            return status < 500                 // se resuelve solo si el codigo de status es menor a 500
        }
    }); 
}

