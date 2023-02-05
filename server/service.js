const pagination = (page, items) => {
  const pageSize = 6;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
};

exports.pagination = pagination;
