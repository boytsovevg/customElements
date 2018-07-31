const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }

        button {
            padding: 10px 12px;
            border-radius: 3px;
            border-style: none;
            background-color: #16c79e;
            color: #fff;
            cursor: pointer;
            box-shadow: 0 1px 5px rgba(0, 0, 0, .5);
        }
    </style>

    <button>
        <slot>Нажать рукой</slot>
    </button>
`;

export default template.content;