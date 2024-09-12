const usersEndpoint = "http://localhost:3000/users";
const commentsEndpoint = "http://localhost:3000/comments";
const postsEndpoint = "http://localhost:3000/posts";
const getUsers = () => {
    return fetch(usersEndpoint);
};
const getPosts = () => {
    return fetch(postsEndpoint);
};
const getComments = () => {
    return fetch(commentsEndpoint);
};

const main = () => {
    Promise.all([getUsers(), getComments(), getPosts()]).then((datas) => {
        console.log(datas);
    });
    datas.forEach((data) => {
        console.log(data.json());
    });
};
main();
