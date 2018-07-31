export default (
    function() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 200px;
                    max-height: 300px;
                    background-color: #4030e8;
                    color: #fff;
                    padding: 20px;
                }

                b-title {
                    margin-bottom: 10px;
                }
            </style>

            <div class="panel">
                <b-title text="Моя панель"></b-title>
                <slot></slot>
            </div>
        `;

        return template.content;
    }
)();