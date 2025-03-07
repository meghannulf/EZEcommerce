import Productmodel from '../models/ProductModel.js';
import fs from 'fs'


// Create a new products
const addproduct = async (req, res) => {


   
    let image_filename = `${req.file.filename}`;


    const product = new Productmodel({
    name: req.body.name,
    image: image_filename,
    price: req.body.price,
    countInStock: req.body.countInStock

})
try{
    await product.save();
    res.json({success:true,message:"Product added successfully"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:"Product not added"})


}
}
   
export{addproduct}