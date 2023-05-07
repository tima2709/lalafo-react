import React from 'react';
import './Product.scss';
import LikeIcon from "../../Icons/likeIcon";
import BasketIcon from "../../Icons/basket";
import SwipeIcon from "../../Icons/swipeIcon";
import MagnifyingGlass from "../../Icons/magnifyingGlass";
import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, increaseAmount} from "../../../redux/action/productAction";

const ProductPage = ({tech}) => {
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        if (carts?.find(cart => cart.id === tech.id)){
            return dispatch(increaseAmount(tech.id))
        } else {
            const newValue = {...carts, amountInCart: 1}
            dispatch(addToCart(newValue))
        }
    }
    return (
        <Box className={'container'}>
            <Box className={'products'}>
                <h1>Popular Products</h1>
                <Box className={'products-link'}>
                    <Link to={'/'}>Recent arrival</Link>
                    <Link to={'/'}>Best sellers</Link>
                    <Link to={'/'}>Special offers</Link>
                    <Link to={'/'}>Featured In</Link>
                </Box>
            </Box>
            <Box className={'row'}>
                {
                    tech.map(el =>
                        <Box key={el.id}
                             className={'col-4'}
                        >
                            <Box className={'box'}>
                                <p>Get up to {el?.discount}% off Today Only!</p>
                                <img src={el.image} alt=""/>
                                <Typography variant={'h5'}>{el.title}</Typography>
                                <Box>
                                    <Button onClick={handleAddToCart}><BasketIcon/></Button>
                                    <Button><MagnifyingGlass/></Button>
                                    <Button><LikeIcon/></Button>
                                    <Button><SwipeIcon/></Button>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
};

export default ProductPage;