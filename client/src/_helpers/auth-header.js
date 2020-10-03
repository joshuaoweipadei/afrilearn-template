export function authHeader(){
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem("currentUser"));

    if(user && user.token){
        return { 'Authorization': user.token };
    }else {
        return {};
    }
}