import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // stock has to be an object {}
  stock: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  formats: {
    type: [String],
    required: true,
    enum: ["printedBook", "ebook", "audioBook"],
  },
  edition: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  price: {
    printedNewBook: {
      regularPrice: {
        type: Number,
        required: false,
      },
      discountedPrice: {
        type: Number,
        required: false,
      },
    },
    printedOldBook: {
      regularPrice: {
        type: Number,
        required: false,
      },
      discountedPrice: {
        type: Number,
        required: false,
      },
    },
    ebook: {
      regularPrice: {
        type: Number,
        required: false,
      },
      discountedPrice: {
        type: Number,
        required: false,
      },
    },
    audioBook: {
      regularPrice: {
        type: Number,
        required: false,
      },
      discountedPrice: {
        type: Number,
        required: false,
      },
    },
  },
  sku: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    enum: ["published", "draft","archived"],
  },
  readingPDF: {
    type: String,
    required: false,
  },
});

export const Products =
  mongoose.models.Products ?? mongoose.model("Products", productsSchema);
