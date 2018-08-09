const getStyles = stylesString => stylesString[0]
        .split(';')
        .map(style => {
            style = style.trim().replace(' ', '');

            const [ prop, value ] = style.split(':');

            return {
                prop,
                value
            }
        })
        .filter(style => style.prop);


export const styled = template => styles => {

    template.innerHTML = `
        <style>
            ${styles[0]}
        </style>
        ${template.innerHTML}
    `;

    return template;
}
