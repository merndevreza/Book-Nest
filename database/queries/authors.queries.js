
import { Authors } from "../models/author-model";
import { Products } from "../models/products-model";
import { Users } from "../models/users-model";
import connectMongo from "../services/connectMongo";

//All Authors
export async function getAllAuthors(withCount) {
  try {
    await connectMongo();
    const response = await Authors.find({}) 
      .lean();
    let result = response.map((item) => {
      return {
        id: item?._id.toString(),
        firstName: item?.firstName,
        lastName: item?.lastName,
      };
    });
    if (withCount) {
      const authorsInProductsArray = await Products.find({})
        .select(["author.details"])
        .lean();

      const authorsIds = authorsInProductsArray.map((item) =>
        item?.author?.details.toString()
      );
      result = response.map((item) => {
        const count=authorsIds.filter(id=>item?._id.toString()===id).length;
        return {
          id: item?._id.toString(),
          firstName: item?.firstName,
          lastName: item?.lastName,
          count
        };
      });
 
    }
    return {
      success: true,
      message: "All Authors",
      data: result,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

//Available authors : Authors those books are available in the store.

export async function getAvailableAuthors() {
  try {
    await connectMongo();
    const response = await Products.find({
      status: "published",
    })
      .select(["author"])
      .lean();
    const authorIdName = response.map((item) => {
      return {
        authorId: item?.author?.details?._id.toString(),
        firstName: item?.author?.firstName,
        lastName: item?.author?.lastName,
      };
    });
    const authorIdNameWithCount = authorIdName.reduce(
      (acc, { authorId, firstName, lastName }) => {
        if (!acc[authorId]) {
          acc[authorId] = {
            authorId,
            firstName,
            lastName,
            count: 0,
          };
        }
        acc[authorId].count++;
        return acc;
      },
      {}
    );

    const authorFinalArray = Object.values(authorIdNameWithCount);
    return {
      success: true,
      message: "Available Authors",
      data: authorFinalArray,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
