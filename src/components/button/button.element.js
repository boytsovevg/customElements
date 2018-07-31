import content from './button.template';

export default (function() {
    class Button extends HTMLElement {
        constructor() {
            super();

            this._init();
        }

        _init() {
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(content.cloneNode(true));
        }
    }

    window.customElements.define('bes-button', Button);
})();