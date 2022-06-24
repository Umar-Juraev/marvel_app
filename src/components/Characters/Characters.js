import { IMG_STANDARD_XLARGE } from "../../constants/api";
import { $indexModal, $indexRoot } from "../../constants/root";
import { getDataApi } from "../../utils/getDataApi";

import "./Characters.scss";

class Characters {
  rednerContent(data) {
    let htmlContent = ``;
    data.forEach(({ name, thumbnail: { extension, path } }) => {
      const imgSrc = `${path}/${IMG_STANDARD_XLARGE}.${extension}`;
      htmlContent += `
            <li class="characters__box__item">
                <img src="${imgSrc}"/>
                <span>${name}</span>
            </li>
            `;
    });
    const htmlWrapper = ` <div class="characters"> 
        <ul class="characters__box"> ${htmlContent}</ul> 
        <div class="characters__blur"></div> 
        </div>`;
    $indexModal.innerHTML = htmlWrapper;
    document.body.style.overflow = "hidden";
  }

  renderNotification() {
    const htmlContent = `
    <div class="notFound">
    Data not found
    </div>
    `;
    $indexModal.innerHTML = htmlContent;
    document.body.style.overflow = "unset";
  }

  async redner(url) {
    const data = await getDataApi.getData(url);
    data.length ? this.rednerContent(data) : this.renderNotification();
  }

  eventListener() {
    const $close = document.querySelector(".characters__blur");
    $close?.addEventListener("click", () => {
      $indexModal.innerHTML = "";
      document.body.style.overflow = "unset";
    });
  }
}

export default new Characters();
