// import home, { b as b1, c as c1 } from "../modules/home.js"; //đổi tên thì dùng as
// import * as home from "../modules/home.js";
// import something, { b, c } from "../modules/home.js";
// import { home } from "../modules/home.js";
// import { products } from "../modules/products.js";
// import { posts } from "../modules/posts.js";
import { home, posts, products } from "../modules/index.js";
home();
products();
posts();
