import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState(''); // State for the main image

  useEffect(() => {
    console.log('Products List:', products);
    console.log('Looking for Product ID:', productId);

    if (products.length > 0) {
      const product = products.find(item => item._id === productId);
      console.log('Found Product:', product);

      if (product) {
        setProductData(product);
        setImage(product.image[0] || ''); // Default image to the first one
        setColor(product.color && product.color.length > 0 ? product.color[0] : ''); // Set default color
      }
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}  // This updates the main image when clicked
                className="thumbnail-image sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="square-image w-full h-auto" src={image} alt="Main Product" /> {/* Display selected image */}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {Array(4).fill().map((_, i) => (
              <img key={i} className="w-3.5" src={assets.star_icon} alt="star" />
            ))}
            <img className="w-3.5" src={assets.star_dull_icon} alt="star dull" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Product Specifications */}
          {productData.specifications && Object.keys(productData.specifications).length > 0 && (
            <div className="mt-5">
              <h3 className="font-medium text-lg mb-2">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>{' '}
                    {Array.isArray(value) ? value.join(', ') : value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Color Selection */}
          {productData.color && productData.color.length > 0 && (
            <div className="mt-5">
              <p className="font-medium text-lg mb-2">Select Color</p>
              <div className="flex flex-wrap gap-2">
                {productData.color.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setColor(item)}
                    className={`border py-2 px-4 bg-gray-100 ${item === color ? 'border-orange-500' : ''}`}
                    style={{
                      backgroundColor: item.toLowerCase(),
                      color: item.toLowerCase() === 'black' ? 'white' : 'inherit', // Ensures contrast for black buttons
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => addToCart(productData._id, size || '')}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services
            over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their
            products, interact with customers, and conduct transactions without the need for a physical presence.
            E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global
            reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices,
            and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with
            relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
