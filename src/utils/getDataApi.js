import axios from "axios";

class GetDataApi {
    async getData(url) {
        try {
            const response = await axios.get(url)
            return response
        } catch (error) {
            console.log(error.message);
            return false
        }
    }

}

export default new GetDataApi();




