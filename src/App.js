import Comics from './components/Comics/Comics';

import './App.scss'

class App {
    async render() {
        await Comics.render()
    }
}
export default new App();

