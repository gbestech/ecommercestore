// Create a helper function

export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100)
}


export const updateCart = (state) =>{
    // Calculate items price

    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    // Calculate shipping price (if order is over $100 them free else $10 shipping)

    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

    //  Calculate the tax price ( this will be %15 tax)

    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice)))

    // Calculate total price

    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    )

    localStorage.setItem('cart', JSON.stringify(state))
    return state
}