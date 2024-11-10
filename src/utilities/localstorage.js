const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addToLS = (item) => {
    const cart = getStoredCart();
    cart.push(item);
    saveCartToLS(cart);
}

const removeToLS = (item) => {
    const storedCartString = getStoredCart();
    const remainingItem = storedCartString.filter(cartItem => cartItem.recipe_id !== item.recipe_id);
    localStorage.removeItem("cart");
    localStorage.setItem('cart', JSON.stringify(remainingItem));
}


export {addToLS , getStoredCart,removeToLS};