function getElementWidth(content, padding, border) {
    const toNumber = (value) => parseFloat(value);

    const contentWidth = toNumber(content);
    const paddingWidth = toNumber(padding) * 2;
    const borderWidth = toNumber(border) * 2;

    return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74