// import template from './button.template';
import template from './button-styled.template';

export class Button extends HTMLElement {
    constructor() {
        super();

        this._init();
    }

    static get observedAttributes() {
        return ['color'];
    }

    get color() {
        return this.getAttribute('color');
    }

    set color(newColor) {
        this.setAttribute('color', newColor);
    }

    _init() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.button = this.shadowRoot.querySelector('button');
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

        this.button.style.backgroundColor = this.color;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.button.style.backgroundColor = newValue;
    }

    disconnectedCallback() {
        this.removeEventListener('click', () => this.onClick());
    }
}

window.customElements.define('bes-button', Button);