//Class

class Person {
    name = "Viet Hoan";
    email = "hoanyttv@gmail.com";
    static message = `Hoc lap trinh tai F8`;

    constructor(name, email) {
        console.log(`ham khoi tao`);
        console.log(this.name, this.email);
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}

var person = new Person();
console.log(person);
console.log(person.getName());
console.log(Person.message);

class User extends Person {
    constructor() {
        console.log(`User constructor`);
        super();
    }
    getInfo() {
        return `
            - name: ${this.name}
            - email: ${this.email}
        `;
    }
}

var user = new User();
console.log(user.getInfo());
