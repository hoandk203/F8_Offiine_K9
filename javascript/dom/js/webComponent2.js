// //Shadow host (Element)
// var boxEl = document.querySelector(".box");

// //Shadow root
// var shadowRoot = boxEl.attachShadow({
//     mode: "open",
// });

// //them content vao shadow root
// shadowRoot.innerHTML = `<h1>F8 - Hc lap trinh khong kho</h1>`;

// var styleEl = document.createElement("style");

// styleEl.textContent = `
// h1{
//     color: red;
// }
// `;
// shadowRoot.append(styleEl);

// var h1 = document.querySelectorAll("h1");
// console.log(h1);

//Xay dung Component Todo App

class TodoApp extends HTMLElement {
    static observedAttributes = ["theme"];
    constructor() {
        super();
        this.theme = "";
        this.valueInput = "";
    }
    connectedCallback() {
        this.attachShadow({
            mode: "open",
        });
        this.render();
        this.addStyle();
        this.addEvent();
        this.addJob();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "theme" && oldValue !== newValue) {
            this.theme = newValue;
            this.render();
        }
    }

    addStyle() {
        var style = document.createElement("style");
        style.textContent = `
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        ul{
            list-style: inside;
        }
        .todo-app{
            border: 1px solid red;
        }
        .todo-app .theme{
            float: right;
        }
        .todo-app{
            &.theme-dark{
                color: #fff;
                background-color: #333;
            }
                .theme{
                    .active{
                        color: red;
                    }
                }
        }
        `;
        this.shadowRoot.append(style);
    }

    render() {
        var temp = `<div class="todo-app theme-${this.theme}">
                <h1>Todo App</h1>
                <div class="theme">
                    <button class="btn-light ${
                        this.theme === "light" ? "active" : ""
                    }">Light</button>
                    <button class="btn-dark ${
                        this.theme === "dark" ? "active" : ""
                    }">Dark</button>
                </div>
                <ul>
                    <li>Job 1</li>
                </ul>
                <form>
                    <input type="text" class="input-add"/>
                    <button class="btn-add">Add</button>
                </form>
            </div>`;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = temp;
        }
    }

    addJob() {
        var inputAdd = this.shadowRoot.querySelector(".input-add");
        var btnAdd = this.shadowRoot.querySelector(".btn-add");
        var ulEl = this.shadowRoot.querySelector(".todo-app ul");
        btnAdd.addEventListener("click", function (e) {
            e.preventDefault();
            this.valueInput = inputAdd.value;
            if (!this.valueInput) {
                return alert("Vui long nhap");
            } else {
                var li = document.createElement("li");
                li.innerText = this.valueInput;
                ulEl.append(li);
                // ulEl.innerHTML += `
                // <li>${this.valueInput}</li>
                // `;
            }
            inputAdd.value = "";
        });
    }

    addEvent() {
        var themeEl = this.shadowRoot.querySelector(".theme");

        var btnLight = this.shadowRoot.querySelector(".btn-light");
        var btnDark = this.shadowRoot.querySelector(".btn-dark");
        btnLight.addEventListener(
            "click",
            function () {
                this.setAttribute("theme", "light");
                this.render();
                this.addStyle();
                this.addEvent();
                this.addJob();
            }.bind(this)
        );
        btnDark.addEventListener(
            "click",
            function () {
                this.setAttribute("theme", "dark");
                this.render();
                this.addStyle();
                this.addEvent();
                this.addJob();
            }.bind(this)
        );
    }
}
customElements.define("todo-app", TodoApp);
