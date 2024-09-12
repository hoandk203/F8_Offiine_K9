const baseUrl = "https://7sqgcl-8080.csb.app";
const page = 1;

const getMethod = async (endpoint) => {
    try {
        const res = await fetch(`${baseUrl}/${endpoint}`);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
