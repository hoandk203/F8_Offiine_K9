const baseUrl = "http://localhost:3000";

const getMethod = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const postMethod = async (endpoint, body) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const putMethod = async (endpoint, body) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

// const users = await getMethod("users");
