import axios from "axios";
import { ICoruse } from "../../../interfaces/interfaces";

class addCourses {
    static async addCourses(dice: ICoruse) {
        const response = axios.post(" http://localhost:3000/courses", dice)
            .then(response => response);
        return response;
    }
}

export default addCourses.addCourses;