import React, {useMemo} from 'react';
import {useDispatch} from "react-redux";
import {Box, Button, Typography} from "@mui/material";
import {increaseAmount} from "../../../redux/action/productAction";

const CardItem = ({tech}) => {
    const dispatch = useDispatch()
    // const discount_price = useMemo(() => {
    //     return Number(tech?.price) - (Number(tech?.price) / 100 * Number(tech?.discount))
    // }, [tech?.price, tech?.discount])
    return (
        <>
            <Box>
                <Box>
                    <img src={tech.image} alt=""/>
                </Box>
                <Box>
                    <Typography variant={'h5'}>
                        {tech.title}
                    </Typography>
                </Box>
                <Box>
                    <Button
                        disable = {tech.amountInCart === tech.amount}
                        onClick={() => dispatch(increaseAmount(tech.id))}
                    >
                        +
                    </Button>
                    <span>{tech.amountInCart}</span>
                    {/*<Button*/}
                    {/*    disable={tech.amountInCart === 0}*/}
                    {/*    onClick={() => dispatch(decreaseAmount(tech.id))}*/}
                    {/*>*/}
                    {/*    */}
                    {/*</Button>*/}
                </Box>
                <Box>
                    <Typography>
                        {/*$ {discount_price}*/}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default CardItem;