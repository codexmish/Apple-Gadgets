import type { Request, Response } from "express";
import { productService } from "../services/productService";


// -------create product controller
const createProduct = async (req: Request, res: Response)=>{
    try {
        const result = await productService.createProduct(req.body)
    } catch (error) {
        
    }

}


export const productController = {createProduct}