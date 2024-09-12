// Class
// - class
// - extend
// - khai báo property, method
// - constructor => hàm khởi tạo trong class
// - super()
// - static

class Person {
    //khai bao thuoc tinh
    name = "Hoan";
    email = "hoanyttv@gmail.com";
    #income = 1200;
    #data = ["item1", "item2", "item3"];
    static message = "hello";

    // phuong thuc khoi tao
    constructor() {}
    //phuong thuc khac
    #getName() {
        return this.name;
    }
    #getEmail() {
        return this.email;
    }
    getIncome() {
        return this.#income;
    }
    getInfo() {
        return {
            name: this.#getName(),
            email: this.#getEmail(),
        };
    }
    get latest() {
        return this.#data[this.#data.length - 1];
    }
    set latest(value) {
        return this.#data.push(value);
    }

    static getMessage() {
        //this trong phuong thuc static se la class cha
        // console.log(new this());

        return new this().name;
    }
}

const person = new Person(); //instance

// console.log(person.getInfo());
// console.log(person.getIncome());
// person.latest = "item4";
// console.log(person.latest);
// console.log(Person.message);
// console.log(Person.getMessage());

class Counter {
    name = "F8";
    constructor() {
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.name);
    }
    render() {
        const h1 = document.createElement("h1");
        h1.innerText = 0;
        document.body.append(h1);

        const btn = document.createElement("button");
        btn.innerText = "click me";
        btn.addEventListener("click", this.handleClick);
        document.body.append(btn);
    }
}
new Counter().render();
