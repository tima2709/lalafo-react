import React from 'react';
import {useSelector} from "react-redux";
import {Box} from "@mui/material";
import CardItem from "../CartItem";

const CartPage = ({tech}) => {
    const carts = useSelector(state => state.carts)
    return (
        <>
            <Box>
                {
                    carts?.map(product => (
                        <Box key={product.id}>
                            <CardItem tech = {tech}/>
                            <h1>{product.title}</h1>
                        </Box>
                    ))
                }
            </Box>
        </>
    );
};

export default CartPage;