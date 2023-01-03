import APIChuckReq from '../service/chuck.config'

export function getRandomJoke() {
    return APIChuckReq.get('/jokes/random', {              
        validateStatus: function (status) {
            return status < 500          
        }
    }); 
}

