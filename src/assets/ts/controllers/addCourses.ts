import axios from "axios";
import { ICoruse } from "../../../interfaces/interfaces";

class addCourses {
    static async addCourses(dice: ICoruse) {
        const response = axios.get("https://my-json-server.typicode.com/isaiasramosdeoliveira/API-System-of-courses/db")
            .then(response => response);
        return response;
    }
}

export default addCourses.addCourses;