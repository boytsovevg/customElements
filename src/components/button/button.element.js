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

            this.events = {
                click: new CustomEvent('bes-button.click', {
                    bubbles: true,
                    detail: { opened: true }
                })
            };
        }

        onClick() {
            this.dispatchEvent(this.events.click);
        }

        connectedCallback() {
            this.addEventListener('click', () => this.onClick());
        }

        disconnectedCallback() {
            this.removeEventListener('click', () => this.onClick())
        }
    }

    window.customElements.define('bes-button', Button);
})();