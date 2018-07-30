export default (function() {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            :host {
                all: initial;
                display: block;
                padding: 20px;
            }

            h1 {
                margin: 0;
            }
        </style>

        <header>
            <nav>
                <a href="#">
                    <b-title text="Евгений Бойцов"><b-title>
                </a>
            </nav>
        </header>
    `;

    return template.content;
})();
