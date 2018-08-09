const template = document.createElement('template');
template.innerHTML = `
    <button>
        <slot>Нажать рукой</slot>
    </button>
`;

export default template;