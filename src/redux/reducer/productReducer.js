const initialState = {
    product: [],
    carts: []
}

export default function productReducer(state = initialState, action) {
    console.log(action, 'action')
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, product: action.payload}
        case 'ADD_TO_CART' :
            return {...state, carts: [...state.carts, action.payload]}
        case 'DELETE_AMOUNT' :
            return {...state, carts: state.carts.filter(cart => cart.id !== action.payload.id)}
        case 'INCREASE_AMOUNT' :
            return {
                ...state,
                carts: state.carts.map(cart => cart.id === action.payload ? {
                    ...cart,
                    amountInCart: cart.amountInCart + 1
                } : cart)
            }
        case 'DECREASE_AMOUNT' :
            return {
                ...state,
                carts: state.carts.map(cart => cart.id === action.payload ? {
                    ...cart,
                    amountInCart: cart.amountInCart - 1
                } : cart)

            }
        default:
            return state
    }
}