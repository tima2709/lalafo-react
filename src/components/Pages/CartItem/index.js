import React, {useMemo} from 'react';
import {useDispatch} from "react-redux";
import {Box, Button, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {decreaseAmount, deleteAmount, increaseAmount} from "../../../redux/action/productAction";

const CardItem = ({product}) => {
    const dispatch = useDispatch()
    // const itemPrice = product.reduce((a, c) => a + c.amountInCart * c.price, 0);

    const discount_price = useMemo(() => {
        return product.amountInCart * (Number(product.price) - (Number(product?.price) / 100 * Number(product?.discount)))
    }, [product?.price, product?.discount])
    return (
        <>
            <Box sx={cart}>
                <Box>
                    <img
                        style={{
                            width: '100px'
                        }}
                        src={product.image} alt=""/>
                </Box>
                <Box sx={cartTitle}>
                    <Typography variant={'h6'}>
                        {product.title}
                    </Typography>
                </Box>
                <Box>
                    <Button variant="contained"
                        // disable = {product.amountInCart === product.amount}
                        onClick={() => dispatch(increaseAmount(product.id))}
                    >
                        +
                    </Button>
                    <span>
                        {product.amountInCart}
                    </span>
                    <Button variant="outlined"
                        // disable = {product.amountInCart === 0}
                            onClick = {() => dispatch(decreaseAmount(product.id))}>
                        -
                    </Button>
                    <span>
                        {product.amountInCart} * ${product.price.toFixed(2)}
                    </span>
                    <Button variant="outlined"
                        onClick={() => dispatch(deleteAmount(product))}><DeleteIcon />
                    </Button>
                    <Box>
                        {/*${itemPrice.toFixed(2)}*/}
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        $ {discount_price}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default CardItem;

const cart = {
    display: 'flex',
}

const cartTitle = {
    width: '300px'
}
