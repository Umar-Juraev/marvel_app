import { getDataApi } from "../../../../marvel_app/src/utils/getDataApi";
import { API_URL, URL_COMICS } from "../../constants/api";


import './Comics.scss'

class Comics {
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS)
        console.log(data);
    }
}

export default new Comics()