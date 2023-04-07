import axios from "axios";
class deleteCourses {
    static async deleteCourses(id: number) {
        try {
            const response = axios.delete(`http://localhost:3000/courses/${id}`)
            return response;

        } catch (err) {
            console.log(err);

        }
    }
}

export default deleteCourses.deleteCourses;