import content from './panel.template';

export default (function(){
    class Panel extends HTMLElement {

        constructor() {
            super();

            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(content.cloneNode(true));
        }

        connectedCallback() {
            this.addEventListener('load-data', () => this.loadData());
            this.addEventListener('delete-data', () => this.deleteData());
            this.addEventListener('activate-coffee', () => this.activateCoffee());
            this.addEventListener('activate-toster', () => this.activateToster());
        }

        loadData() {
            console.log('loading data...');
        }

        deleteData() {
            console.log('deleting data...');
        }

        activateCoffee() {
            console.log('coffee in progress...');
        }

        activateToster() {
            console.log('toster is activated');
        }

        disconnectedCallback() {
            this.addEventListener('bes-button.click', () => this.loadData());
        }
    }

    window.customElements.define('bes-panel', Panel);
})();