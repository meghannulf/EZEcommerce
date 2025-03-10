import express from "express"
import { listProduct, addProduct, removeProduct, singleProduct } from "../controllers/ProductController.js"
import upload from "../middleware/multer.js"


const productRouter = express.Router();

//route for adding a product
productRouter.post
("/add",upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addProduct);

//route for listing all products
productRouter.get("/list", listProduct);

//route for removing a product
productRouter.delete("/remove/:id", removeProduct);

//route for single product
productRouter.get("/single/:id", singleProduct);

export default productRouter;
