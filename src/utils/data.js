// Items are shown unless explicitly marked "visible": false in the JSON
export const isVisible = (item) => item.visible !== false;

export const filterVisible = (items) => items.filter(isVisible);

// Returns items matching the given ids, in the order of the ids
export const pickByIds = (items, ids) =>
    ids.map((id) => items.find((item) => item.id === id)).filter(Boolean);
