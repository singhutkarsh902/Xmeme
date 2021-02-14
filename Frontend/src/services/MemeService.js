import http from "../http-common";

const getAll = () => {
    return http.get("/memes");
};

const get = id => {
    return http.get(`/memes/${id}`);
};

const create = data => {
    return http.post("/memes", data);
};

const update = (id, data) => {
    return http.patch(`/memes/${id}`, data);
};

const remove = id => {
    return http.delete(`/memes/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
};