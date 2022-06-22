import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { $indexModal } from '../../constants/root';
import { getDataApi } from '../../utils/getDataApi';

import './Characters.scss'

class Characters {







    async redner(url) {
        const data = await getDataApi.getData(url)
        if (data.length) {

        }


        let htmlContent = ``

        data.forEach(({ name, thumbnail: { extension, path } }) => {
            const imgSrc = `${path}/${IMG_STANDARD_XLARGE}.${extension}`
            htmlContent += `
            <li class="characters__box__item">
                <img src="${imgSrc}"/>
                <span>${name}</span>
            </li>
            `
        })

        const htmlWrapper = ` <div class="characters"> 
        <ul class="characters__box"> ${htmlContent}</ul> 
        <div class="characters__blur"></div> 
        </div>`
        $indexModal.innerHTML = htmlWrapper
    }
}

export default new Characters()