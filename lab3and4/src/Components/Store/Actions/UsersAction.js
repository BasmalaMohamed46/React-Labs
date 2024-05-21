import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USER= "GET_USER";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_CART = "ADD_CART";

export const getUsers = () => (dispatch) => {
    return axios.get("http://localhost:2000/users")
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};

export const getUser = (id) => (dispatch) => {
    return axios.get(`http://localhost:2000/users/${id}`)
        .then(res => {
            dispatch({
                type: GET_USER,
                payload: res.data,
            });
        })
        .catch(err => console.log(err));
};

export const deleteUser = (id) => (dispatch) => {
    return axios.delete(`http://localhost:2000/users/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_USER,
                payload: id,
            });
        })
        .catch(err => console.log(err));
};

export const addUser = (UserData) => (dispatch) => {
    return axios.post("http://localhost:2000/users", UserData)
        .then(() => {
            dispatch({
                type: ADD_USER,
                payload: UserData,
            });
        })
        .catch(err => console.log(err));
};

export const updateUser = (id, UserData) => (dispatch) => {
    return axios.put(`http://localhost:2000/users/${id}`, UserData)
        .then(() => {
            dispatch(getUsers());
        })
        .catch(err => console.log(err));
};

export const addToCart = () => ({
    type: ADD_CART,
});
