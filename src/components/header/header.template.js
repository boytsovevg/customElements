const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            padding: 18px;
            text-align: center;
        }
    </style>

    <header>
        <nav>
            <a href="#">
                <b-title text="Рабочий стол"><b-title>
            </a>
        </nav>
    </header>
`;

export default template.content;
