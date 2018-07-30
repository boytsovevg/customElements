export default (function() {
    const template = document.createElement('template');
    template.innerHTML = `
        <header class="header">
            <nav>Menu</nav>
        </header>
    `;
    return template.content;
})();