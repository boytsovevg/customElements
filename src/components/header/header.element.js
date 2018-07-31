import content from './header.template';

export class Header extends HTMLElement {
    constructor() {
        super();

        this._init();
    }

    _init() {
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(content.cloneNode(true));
    }

    disconnectedCallback() {
        console.log('destroy');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(attrName, oldVal, newVal);
    }
}

window.customElements.define('b-header', Header);
