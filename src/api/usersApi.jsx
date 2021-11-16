import axios from "axios";

export async function getUsers(){
    return axios.get("http://localhost:3000/users");
}

export async function postUser(user){
    return axios.post("http://localhost:3000/users", user);
}
