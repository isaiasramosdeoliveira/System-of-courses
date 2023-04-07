import axios from "axios";
class getCourses {
    static async getCourses(id?: number) {
        try {
            const response = axios.get(`http://localhost:3000/courses/${id ? id : ""}`)
            return response;

        } catch (err) {
            console.log(err);
        }
    }
}

export default getCourses.getCourses;