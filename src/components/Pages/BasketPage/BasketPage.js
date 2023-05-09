import React from 'react';
import {useSelector} from "react-redux";
import {Box} from "@mui/material";
import CardItem from "../CartItem";

const CartPage = () => {
    const carts = useSelector(state => state.product.carts)
    return (
        <>
            <Box>
                {
                    carts?.map(product => (
                        <Box key={product.id}>
                            <CardItem product={product}/>
                        </Box>
                    ))
                }
            </Box>
        </>
    );
};

export default CartPage;