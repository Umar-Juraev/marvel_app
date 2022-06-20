import { API_URL } from "../../constants/api";
import getDataApi from "../../utils/getDataApi";

class Comics {
  async  render() {
        const data = await getDataApi.getData(API_URL)
        console.log(data);
    }
}

export default new Comics()