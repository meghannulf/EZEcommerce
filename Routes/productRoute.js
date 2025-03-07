import express from "express"
import { addproduct } from "../controllers/ProductController.js"
import multer from "multer"

const productRoute = express.Router();


// Image Storage Engine
const storage = multer.diskStorage({
    destination:"Uploads",
    filename:(req,file,cb)=>{
       return cb(null,`${file.originalname}_${Date.now()}`)
    }

          
})

const upload = multer({storage:storage})

productRoute.post("/add",upload.single("Image"),addproduct)





export default productRoute;
