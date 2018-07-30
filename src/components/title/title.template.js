export default (function() {
    const template = document.createElement('template');

    template.innerHTML = `
        <h1></h1>
    `;

    return template.content;
})();