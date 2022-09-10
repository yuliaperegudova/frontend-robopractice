import axios from "axios";
import {Endpoints} from "./endpoints";

const getUsers = () => axios.get(Endpoints.GetUsers);

export {
    getUsers
}
