import axios from "axios";
import { ICoruse } from "../../../interfaces/interfaces";

class EditCourses {
    static async editCourses(id: string | undefined, dice: ICoruse) {
        const response = axios.put(` http://localhost:3000/courses/${id}`, dice)
            .then(response => response);
        return response;
    }
}

export default EditCourses.editCourses;