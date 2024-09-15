const app = document.querySelector("#app");
const router = new Navigo("/", { linksSelector: "a" });

const render = async (position, content) => {
    const result = typeof content === "function" ? await content() : content();
    position.innerHTML = result;
};
router
    .on("/BTVN", async () => {
        await render(app, homePage);
    })
    .on("/BTVN/login", () => {
        render(app, loginPage);
    })
    .on("BTVN/register", () => {
        render(app, registerPage);
    });

router.resolve();
