import axios from "axios";


class GetDataApi {
    constructor() {
        this.apiKey = 'a5837db97d72016c81a7a776f4240db9'
    }
    async getData(url) {
        try {
            const response = await axios.get(url, {
                params: {
                    apikey: this.apiKey,
                    limit: 100
                }
            })
            return response.data.data.results
        } catch (error) {
            console.log(error.message)
            return false
        }
    }
}
export const getDataApi = new GetDataApi();