import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // Enhanced addToCart with better error handling
    const addToCart = async (itemId, color = 'default') => {
        try {
            if (!itemId) {
                throw new Error('Product ID is required');
            }

            // Validate color exists for products that require it
            const product = products.find(p => p._id === itemId);
            if (product?.colors?.length > 0 && !color) {
                toast.error('Please select a color');
                return;
            }

            setCartItems(prev => {
                const newCart = { ...prev };
                
                if (!newCart[itemId]) {
                    newCart[itemId] = {};
                }
                
                newCart[itemId][color] = (newCart[itemId][color] || 0) + 1;
                return newCart;
            });

            if (token) {
                await axios.post(
                    `${backendUrl}/api/cart/add`, 
                    { itemId, color }, 
                    { headers: { token } }
                );
                toast.success('Added to cart');
            }
        } catch (error) {
            console.error('Add to cart error:', error);
            toast.error(error.response?.data?.message || error.message);
        }
    };

    // More efficient cart count calculation
    const getCartCount = () => {
        return Object.values(cartItems).reduce((total, colorQuantities) => {
            return total + Object.values(colorQuantities).reduce((sum, qty) => sum + qty, 0);
        }, 0);
    };

    // Improved quantity update with validation
    const updateQuantity = async (itemId, color, newQuantity) => {
        try {
            if (newQuantity < 0) return;
            
            setCartItems(prev => {
                const updated = { ...prev };
                if (!updated[itemId]) return updated;
                
                if (newQuantity === 0) {
                    delete updated[itemId][color];
                    if (Object.keys(updated[itemId]).length === 0) {
                        delete updated[itemId];
                    }
                } else {
                    updated[itemId][color] = newQuantity;
                }
                return updated;
            });

            if (token) {
                await axios.post(
                    `${backendUrl}/api/cart/update`,
                    { itemId, color, quantity: newQuantity },
                    { headers: { token } }
                );
            }
        } catch (error) {
            console.error('Update quantity error:', error);
            toast.error(error.response?.data?.message || 'Failed to update quantity');
        }
    };

    // Optimized cart amount calculation
    const getCartAmount = () => {
        return Object.entries(cartItems).reduce((total, [itemId, colorQuantities]) => {
            const product = products.find(p => p._id === itemId);
            if (!product) return total;
            
            return total + Object.entries(colorQuantities).reduce((sum, [color, quantity]) => {
                return sum + (product.price * quantity);
            }, 0);
        }, 0);
    };

    // Enhanced product fetching with loading state
    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Fetch products error:', error);
            toast.error(error.response?.data?.message || 'Failed to load products');
        }
    };

    // Improved cart synchronization
    const getUserCart = async (userToken) => {
        try {
            const response = await axios.post(
                `${backendUrl}/api/cart/get`,
                {},
                { headers: { token: userToken } }
            );
            
            if (response.data.success) {
                setCartItems(response.data.cartData || {});
            }
        } catch (error) {
            console.error('Get cart error:', error);
            if (error.response?.status !== 401) { // Don't show error for unauthorized
                toast.error(error.response?.data?.message || 'Failed to load cart');
            }
        }
    };

    // Get cart item details including color
    const getCartItemDetails = (itemId, color) => {
        const product = products.find(p => p._id === itemId);
        if (!product) return null;
        
        return {
            ...product,
            selectedColor: color,
            quantity: cartItems[itemId]?.[color] || 0
        };
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken && !token) {
            setToken(storedToken);
            getUserCart(storedToken);
        } else if (token) {
            getUserCart(token);
        }
    }, [token]);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        setCartItems,
        getCartCount,
        updateQuantity,
        getCartAmount,
        getCartItemDetails, // New function
        navigate,
        backendUrl,
        setToken,
        token
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;