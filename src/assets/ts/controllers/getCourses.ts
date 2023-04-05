import axios from "axios";
class getCourses{
    static async getCourses(id?: number){
        const response = axios.get(`http://localhost:3000/courses/${id? id : ""}`)
        .then(response => response);
        return response;
    }
}

export default getCourses.getCourses;