export default (function() {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            :host {
                display: block;
                padding: 20px;
                text-align: center;
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
