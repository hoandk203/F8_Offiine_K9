import Navigo from "navigo";
import "./style.css";

const HomePage = () => {
    return `
  <div>
    <h1>Hello</h1>
  </div>
`;
};

// const Heas

const ProductList = () => {
    return `
<div>
  <h1>Product List</h1>
</div>
`;
};

const ProductDetail = (data) => {
    console.log(data);

    return `
<div>
  <h1>Product Detail ${data.data.id}</h1>
</div>
`;
};

// document.querySelector("#app").innerHTML = Header();

const router = new Navigo("/", { linksSelector: "a" });

const app = document.querySelector("#app");
const render = (position, content) => {
    position.innerHTML = content();
};

router.on("/", () => {
    render(app, HomePage);
});
router.on("/products", () => {
    render(app, ProductList);
});

router.on("/products-detail/:id", (data) => {
    render(app, () => ProductDetail(data));
});
router.resolve();
