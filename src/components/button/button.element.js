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

        onClick() {
            this.dispatchEvent(this.events[this.eventName]);
        }

        connectedCallback() {
            this.addEventListener('click', () => this.onClick());
            this.eventName = this.getAttribute('event');

            this.events = {
                [this.eventName]: new CustomEvent(this.eventName, {
                    bubbles: true,
                    detail: { opened: true }
                })
            };
        }

        disconnectedCallback() {
            this.removeEventListener('click', () => this.onClick())
        }
    }

    window.customElements.define('bes-button', Button);
})();