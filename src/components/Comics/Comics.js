import { getDataApi } from "../../../../marvel_app/src/utils/getDataApi";
import {
  API_URL,
  URL_COMICS,
  IMG_STANDARD_XLARGE,
  IMG_NOT_AVAILABLE,
  URL_CHARACTERS,
} from "../../constants/api";
import { $indexRoot } from "../../constants/root";
import Error from "../Error/Error";
import Characters from "../Characters/Characters";

import "./Comics.scss";

class Comics {
  renderContent(data) {
    let htmlContent = ``;
    data.forEach(({ id, title, thumbnail: { extension, path } }) => {
      if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
        const uri = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTERS}`;
        const imgSrc = `${path}/${IMG_STANDARD_XLARGE}.${extension}`;
        htmlContent += `
                <li  data-uri="${uri}"  class="comics__item" >
                    <span>${title}</span>
                    <img src="${imgSrc}" />
                </li>
                `;
      }
    });
    const htmlWrapper = `<ul class="comics">${htmlContent}</ul>`;
    $indexRoot.innerHTML = htmlWrapper;
  }

  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    data ? this.renderContent(data) : Error.render();
  }
  eventListener() {
    document.querySelectorAll(".comics__item").forEach((elem) => {
      const uri = elem.getAttribute("data-uri");
      elem.addEventListener("click", async () => {
        await Characters.redner(uri);
        Characters.eventListener();
      });
    });


  }
}

export default new Comics();
