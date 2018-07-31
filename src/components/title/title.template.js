const template = document.createElement('template');

template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }

        h1 {
            margin: 0;
            font-size: 1.5em;
        }
    </style>

    <h1></h1>
`;

export default template.content;