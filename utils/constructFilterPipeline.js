import { ObjectId } from "mongodb";

// Helper function to check if a string is a valid ObjectId
const isValidObjectId = (id) => {
  return ObjectId.isValid(id) && String(new ObjectId(id)) === id;
};

export const constructFilterPipeline = (fields) => {
  const { search, formats, categories, authors, ratings, min, max } =
    fields ?? {};

  const searchQueryRegex = search ? new RegExp(search, "i") : undefined;

  const filter = {};

  // Search using product name, description, category name, or author name
  if (searchQueryRegex) {
    filter.$or = [
      { title: searchQueryRegex },
      { shortDescription: searchQueryRegex },
      { "category.name": searchQueryRegex },
      { "author.firstName": searchQueryRegex },
      { "author.lastName": searchQueryRegex },
    ];
  }

  // Filter by category.details id
  if (categories.length > 0 && categories[0] !== "undefined") {
    const validCategories = categories
      .filter(isValidObjectId)
      .map((id) => new ObjectId(id));
    if (validCategories.length > 0) {
      filter["category.details"] = {
        $in: validCategories,
      };
    }
  }

  // Filter by author.details id
  if (authors.length > 0 && authors[0] !== "undefined") {
    const validAuthors = authors
      .filter(isValidObjectId)
      .map((id) => new ObjectId(id));
    if (validAuthors.length > 0) {
      filter["author.details"] = {
        $in: validAuthors,
      };
    }
  }

  // Filter by price range
  if (min !== undefined && max !== undefined) {
    filter.$or = [
      { "price.printedNewBook_regularPrice": { $gte: min, $lte: max } },
      { "price.printedNewBook_discountedPrice": { $gte: min, $lte: max } },
      { "price.printedOldBook_regularPrice": { $gte: min, $lte: max } },
      { "price.printedOldBook_discountedPrice": { $gte: min, $lte: max } },
      { "price.ebook_regularPrice": { $gte: min, $lte: max } },
      { "price.ebook_discountedPrice": { $gte: min, $lte: max } },
      { "price.audioBook_regularPrice": { $gte: min, $lte: max } },
      { "price.audioBook_discountedPrice": { $gte: min, $lte: max } },
    ];
  }

  // Filter by formats
  if (formats && formats.length > 0) {
    const formatFilters = [];

    if (formats.includes("printedBook")) {
      formatFilters.push(
        { "price.printedNewBook_regularPrice": { $ne: null } },
        { "price.printedOldBook_regularPrice": { $ne: null } }
      );
    }
    if (formats.includes("ebook")) {
      formatFilters.push({ "price.ebook_regularPrice": { $ne: null } });
    }
    if (formats.includes("audioBook")) {
      formatFilters.push({ "price.audioBook_regularPrice": { $ne: null } });
    }
    if (formatFilters.length > 0) {
      filter.$and = filter.$and || [];
      filter.$and.push({ $or: formatFilters });
    }
  }
  //Filter by ratings
  if (ratings.length > 0 && ratings[0] !== "undefined") {
    const ratingsInNumber = ratings.map(Number);
    filter.$or = ratingsInNumber.map((rating) => {
      return { averageRating: { $gte: rating, $lt: rating + 1 } };
    });
  }
  return { filter };
};
export default constructFilterPipeline;
