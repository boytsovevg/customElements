import content from './header.template';

export class Header extends HTMLElement {
    constructor() {
        super();
    }

    init() {
        this.attachShadow({mode: 'open'}).appendChild(content.cloneNode(true));
    }

    connectedCallback() {
        console.log('connected');
        this.init();
    }

    disconnectedCallback() {
        console.log('destroy');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(attrName, oldVal, newVal);
    }
}