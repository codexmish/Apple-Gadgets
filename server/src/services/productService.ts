import type { CreateProduct } from "../interfaces/productInterface";
import { catagorySchema } from "../models/catagorySchema";
import { productSchema } from "../models/productSchema";

// ------create produce services
const createProduct = async (payload: CreateProduct) => {
  const {
    title,
    slug,
    description,
    category,
    price,
    discountPercentage,
    variants,
    tags,
    isActive,
  } = payload;

  //   -----validation
  if (!title) {
    throw new Error("Title is required");
  }

  if (!slug) {
    throw new Error("Slug is required");
  }

  const isSlugExist = await productSchema.findOne({
    slug: slug.toLowerCase(),
  });

  if (isSlugExist) {
    throw new Error("Slug is already exist");
  }

  if (!description) {
    throw new Error("Description is required");
  }

  if (!category) {
    throw new Error("category is required");
  }

  const isCategoryExist = await catagorySchema.findById(category);

  if (!isCategoryExist) {
    throw new Error("Invalid Category");
  }

  if (!price) {
    throw new Error("Price is required");
  }

  //   -------product variants validation
  const vaariantsData = variants;

  if (!Array.isArray(vaariantsData) || vaariantsData.length === 0) {
    throw new Error("minimum 1 varinat is required");
  }

  for (const variant of vaariantsData) {
    if (!variant.sku) {
      throw new Error("sku is required");
    }

    if (!variant.color) {
      throw new Error("color is required");
    }

    if (!variant.size) {
      throw new Error("size is required");
    }

    if (!variant.stock || variant.stock < 1) {
      throw new Error("Stock is required and must be more then 0");
    }
  }

  const skus = vaariantsData.map((v) => v.sku);

  if (new Set(skus).size !== skus.length) {
    throw new Error("SKU must be unique");
  }
};

export const productService = { createProduct };
