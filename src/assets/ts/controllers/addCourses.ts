import axios from "axios";
import { ICoruse } from "../../../interfaces/interfaces";

class addCourses {
    static async addCourses(dice: ICoruse) {
        try{
            const response = await axios.post(" http://localhost:3000/courses", dice)
            return response;
        } catch(err){
            console.log(err);
        }
    }
}

export default addCourses.addCourses;