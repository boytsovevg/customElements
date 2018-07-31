import content from './panel.template';

export default (function(){
    class Panel extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(content.cloneNode(true));
        }

        connectedCallback() {
            this.addEventListener('bes-button.click', () => this.loadData());
        }

        loadData() {
            console.log('load data...');
        }

        disconnectedCallback() {
            this.addEventListener('bes-button.click', () => this.loadData());
        }
    }

    window.customElements.define('bes-panel', Panel);
})();