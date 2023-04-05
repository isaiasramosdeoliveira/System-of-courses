import axios from "axios";
class getCourses{
    static async getCourses(){
        const response = axios.get(" http://localhost:3000/courses")
        .then(response => response);
        return response;
    }
}

export default getCourses.getCourses;