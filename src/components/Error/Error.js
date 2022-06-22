import { $indexRoot } from '../../constants/root'
import './Error.scss'

class Error {
    render() {
        const htmlContent = `
        <div class="error">
            <span>
                <p>Xatolik</p>
                <p>Boshidan urunib koring </p>
            </span>
        </div>
        `

        $indexRoot.innerHTML = htmlContent
    }
}

export default new Error()