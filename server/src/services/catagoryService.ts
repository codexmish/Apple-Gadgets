import type { CreateCategory } from "../interfaces/categoryInterface";
import { catagorySchema } from "../models/catagorySchema";


// ----create category
const createCategory = async (payload: CreateCategory) => {
  const { title } = payload;

  //   validation
  if (!title?.trim()) {
    throw new Error("Category title is required");
  }


//   ----create category
 const category = await catagorySchema.create({title})
 return category
};


// ----get all category
const getAllCategory = async()=>{
    const categoryList = await catagorySchema.find({})
    return categoryList
}

export const caragoryService = { createCategory, getAllCategory };
