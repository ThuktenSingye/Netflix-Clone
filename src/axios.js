// import axios module: js library to to make http request and return promises
import axios from "axios"
// based url to make request to the movie database. we create instanaces of axios client with based url 
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
// the request made by above instance will redirect to the base url
// instance.get('/foo-bar') // 'https://www.themoviedb.org/foo-bar'
export default instance;

// you can have multiple named export but only one default export. default export we can rename it