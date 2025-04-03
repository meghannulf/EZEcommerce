import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, color) => {
        // If no color is selected, allow the item to be added without it
        if (!color) {
          // Optionally, you can add a default or leave the color empty
          color = '';  // This can be 'default', '' or any default string for color
        }
      
        let cartData = structuredClone(cartItems);
      
        if (cartData[itemId]) {
          // Handle the case where color is selected
          if (cartData[itemId][color]) {
            cartData[itemId][color] += 1; // Increment quantity if color exists
          } else {
            cartData[itemId][color] = 1; // Initialize quantity for this color
          }
        } else {
          cartData[itemId] = {};
          cartData[itemId][color] = 1; // Add item with color
        }
      
        setCartItems(cartData); // Update the cart state
      };
      

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                }
            }
        }
        return totalAmount;
    }

    const value = {
        currency, delivery_fee,
        products,
        navigate,
        search, setSearch,
        showSearch, setShowSearch,
        addToCart, updateQuantity,
        cartItems,
        getCartCount, getCartAmount

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )


}

export default ShopContextProvider;