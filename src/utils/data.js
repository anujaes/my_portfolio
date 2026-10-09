// Items are shown unless explicitly marked "visible": false in the JSON
export const isVisible = (item) => item.visible !== false;

export const filterVisible = (items) => items.filter(isVisible);
