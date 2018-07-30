export default (function() {
    const template = document.createElement('template');

    template.innerHTML = `
        <style>
            h1 {
                margin: 0;
                font-size: 1.5em;
            }
        </style>

        <h1></h1>
    `;

    return template.content;
})();