export const removeAccent = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const filterItems = (items, searchValue, field) => {
  const searchNormalized = removeAccent(searchValue).toLowerCase();

  return items.filter(item => {
    const value = field ? item[field] : item;
    return removeAccent(value).toLowerCase().includes(searchNormalized);
  });
};
