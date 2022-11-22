export class Contact {
    name= '';
    lastname= '';
    email= '';
    logged= false;

    constructor(name, lastname, email, logged) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.logged = logged;
    }

}