import React from 'react';
import {Box, Button} from "@mui/material";
import {useSelector} from "react-redux";

const ModalLoop = ({setShowImg, loopImg}) => {
    const tech = useSelector(state => state.product.product)
    console.log(loopImg, 'loop')
    return (
        <Box style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000
        }}>
            <Box style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'transparent,
                width: '500px',
                height: '500px',
                zIndex: 1000,
            }}>
                <Box style={{
                    position: 'absolute',
                    top: '0',
                    right: '0'
                }}>
                    <Button onClick={() => setShowImg(false)}>X</Button>
                </Box>
                <Box>
                    <img
                        style={{
                            width: '100%',
                            padding: '20px'

                        }}
                        src={loopImg?.image} alt=""
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ModalLoop;