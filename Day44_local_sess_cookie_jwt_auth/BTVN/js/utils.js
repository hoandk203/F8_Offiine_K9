const baseUrl = `http://103.159.51.69:2000`;

const getMethod = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
        if (!response.ok) {
            throw new Error("Unauthorized");
        }
    } catch (error) {
        console.log(error);
    }
};

const requestRegister = async (endpoint, name, email, password) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        if (!response.ok) {
            throw new Error("Unauthorized");
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const requestLogin = async (endpoint, email, password) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error("Unauthorized");
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const requestPost = async (endpoint, accessToken, title, content) => {
    if (title && content) {
        method = "POST";
        body = JSON.stringify({
            title,
            content,
        });
    } else {
        method = "GET";
        body = null;
    }

    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: body,
        });
        if (!response.ok) {
            throw new Error("Unauthorized");
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const requestRefreshToken = async (endpoint, refreshToken) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh: refreshToken,
            }),
        });
        if (!response.ok) {
            throw new Error("Unauthorized");
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
};
