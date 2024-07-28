export const constructFilterPipeline = (fields) => {
  const {
    query,
    categories,
    authors,
    min,
    max, 
    limit = 10,
    skip = 0,
    sort: sortBy,
    status,
  } = fields ?? {};

  const queryRegex = query ? new RegExp(query, "i") : undefined;

  const filter = {};

  // search using product name or description
  if (queryRegex) {
    filter.$or = [
      { title: queryRegex },
      { shortDescription: { $regex: queryRegex } },
    ];
  }

  if (categories) {
    filter.category = { $in: categories };
  }

  if (min !== undefined && max !== undefined) {
    filter.discount_price = { $gte: min, $lte: max };
  }
  
  return { filter, limit, skip, sort };
};
export default constructFilterPipeline;
