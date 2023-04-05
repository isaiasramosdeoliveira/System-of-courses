import axios from "axios";
class deleteCourses {
    static async deleteCourses(id: number) {
        const response = axios.delete(`http://localhost:3000/courses/${id}`)
            .then(response => response);
        return response;
    }
}

export default deleteCourses.deleteCourses;