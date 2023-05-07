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

export const addToCart = (tech) => {
    return { type: 'ADD_TO_CART', payload: tech}
}
export const increaseAmount = (id) => {
    return {type: 'INCREASE_AMOUNT', payload: id}
}