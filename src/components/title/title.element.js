import content from './title.template';

export default (function() {
    class Title extends HTMLElement {
        get text() {
            return this.getAttribute('text');
        }
    
        set text(newText) {
            this.setAttribute('text', newText);
        }
        
        constructor() {
            super();
    
            this._init();
        }
    
        _init() {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(content.cloneNode(true))

            this.headline = this.shadowRoot.querySelector('h1');
            this.headline.innerText = this.text;
        }
    
        attributeChangedCallback(name, oldValue, newValue) {
            this.headline.innerText = this.text;
        }
    }

    window.customElements.define('b-title', Title);
})();