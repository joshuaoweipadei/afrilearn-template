import config from '../config';
import { history, authHeader, handleResponse } from '../_helpers'
import { BehaviorSubject } from 'rxjs';

const userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));
const baseUrl = `${config.apiUrl}/api/account`;

export const accountService = {
    register,
    login,
    logout,
    getById,
    getAll,
    deleteUser,
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value }
}

function register(values){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
    }
    return fetch(`${baseUrl}/register`, requestOptions).then(handleResponse);
}

function login(values) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
    };
    return fetch(`${baseUrl}/authenticate`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));

            userSubject.next(user);   // publish user to subscribers

            return user;
        });
}

function logout() {
    // remove user from local storage and publish null to user subject
    localStorage.removeItem("currentUser");
    userSubject.next(null);
    history.push('/');
}

function getById(id) {
    const requestOptions = {
        method: "GET",
        headers: authHeader()
    };
    return fetch(`${baseUrl}/${id}`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: "GET",
        headers: authHeader()
    };
    return fetch(baseUrl, requestOptions).then(handleResponse);
}

function deleteUser(id) {
    const requestOptions = {
        method: "DELETE",
        headers: authHeader()
    };
    return fetch(`${baseUrl}/${id}`, requestOptions).then(handleResponse)
        .then(x => {
            // auto logout if the logged in user deleted their own record
            if (id === userSubject.value.id) {
                logout();
            }
            return x;
        });
}