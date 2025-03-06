import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link>
    {/* <Link className='light-grey-700 cursor-pointer' to={'/product/${id}'} > */}
        <div className='overflow-hidden'>
            {/* <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" /> */}
        </div>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>

      
  )
}

export default ProductItem;
