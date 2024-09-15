const app = document.querySelector("#app");
const router = new Navigo(
    "/F8_Offiine_K9/Day44_local_sess_cookie_jwt_auth/BTVN/",
    { linksSelector: "a" }
);

const render = async (position, content) => {
    const result = typeof content === "function" ? await content() : content();
    position.innerHTML = result;
};
router
    .on("/", async () => {
        await render(app, homePage);
    })
    .on("/login", () => {
        render(app, loginPage);
    })
    .on("/register", () => {
        render(app, registerPage);
    });

router.resolve();
