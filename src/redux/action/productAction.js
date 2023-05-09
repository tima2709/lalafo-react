import axios from "axios";

export const getProducts = () => {
    return (dispatch) => {
        axios('https://64475d6850c2533744232b21.mockapi.io/products')
            .then(({data}) => {
                dispatch({type: 'GET_PRODUCTS', payload: data})
                // console.log(data, 'data')
            })
    }
}

export const addToCart = (product) => {
    return { type: 'ADD_TO_CART', payload: product}
}
export const increaseAmount = (id) => {
    return {type: 'INCREASE_AMOUNT', payload: id}
}

export const decreaseAmount = (id) => {
    return {type: 'DECREASE_AMOUNT', payload: id}
}

export const deleteAmount = (product) => {
    return {type: 'DELETE_AMOUNT', payload: product}
}