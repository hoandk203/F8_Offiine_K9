const router = new Navigo("/");

const app = document.getElementById("app");

router.on({
    "/": () => {
        renderUser();
    },
    "/about": () => {
        app.innerHTML = `Welcome about page`;
    },
    "/users/:id": ({ data }) => {
        const { id } = data;
        renderUserForm(id);
    },
});
