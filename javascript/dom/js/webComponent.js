//HTMLElement

class HelloWorld extends HTMLElement {
    static observedAttributes = ["data-type"];
    constructor() {
        super();
        console.log(`hello constructor`);
    }
    connectedCallback() {
        var _this = this;
        console.log(`component duoc dua vao callback`);
        this.innerHTML = `
        <h1>Count: <span>0</span></h1>
        <button>+</button>
        `;
        var btn = this.querySelector("button");
        var span = this.querySelector("span");
        btn.addEventListener("click", function () {
            span.innerText++;
            if (span.innerText == 10) {
                _this.setAttribute("data-type", "success");
            }
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("attributeChanedCallback");
    }

    disconnectedCallback() {
        console.log(`component truoc khi bi loai bo khoi dom`);
    }
}

customElements.define("hello-world", HelloWorld);

var btn = document.querySelector(".btn");
var helloWorldEl = document.createElement("hello-world");
var isShow = false;
btn.addEventListener("click", function () {
    if (!isShow) {
        document.body.append(helloWorldEl);
        isShow = true;
    } else {
        helloWorldEl.remove();
        isShow = false;
    }
});
