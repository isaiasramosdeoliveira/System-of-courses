import axios from "axios";
import { ICoruse } from "../../../interfaces/interfaces";

class EditCourses {
    static async editCourses(id: string | undefined, dice: ICoruse) {
        try {
            const response = axios.put(` http://localhost:3000/courses/${id}`, dice)
            return response;

        } catch (err) {
            console.log(err);
        }
    }
}

export default EditCourses.editCourses;