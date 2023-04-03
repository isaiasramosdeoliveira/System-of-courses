import axios from "axios";
class getCourses{
    static async getCourses(){
        const response = axios.get("https://my-json-server.typicode.com/isaiasramosdeoliveira/API-System-of-courses/db")
        .then(response => response);
        return response;
    }
}

export default getCourses.getCourses;