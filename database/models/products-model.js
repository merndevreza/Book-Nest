import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  stock: {
    printedNewBook_stock: {
      type: Number,
      required: false,
    },
    printedOldBook_stock: {
      type: Number,
      required: false,
    }
  },
  category: {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }
  },
  author: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    details: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    }
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
    printedNewBook_regularPrice: {
      type: Number,
      required: false,
    },
    printedNewBook_discountedPrice: {
      type: Number,
      required: false,
    },
    printedOldBook_regularPrice: {
      type: Number,
      required: false,
    },
    printedOldBook_discountedPrice: {
      type: Number,
      required: false,
    },
    ebook_regularPrice: {
      type: Number,
      required: false,
    },
    ebook_discountedPrice: {
      type: Number,
      required: false,
    },
    audioBook_regularPrice: {
      type: Number,
      required: false,
    },
    audioBook_discountedPrice: {
      type: Number,
      required: false,
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
    enum: ["published", "draft", "archived"],
  },
  readingPDF: {
    type: String,
    required: false,
  },
});

export const Products =
  mongoose.models.Products ?? mongoose.model("Products", productsSchema);
