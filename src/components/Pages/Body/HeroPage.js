import React from 'react';
import './HeroPage.scss';
import {Box, Button, Typography} from "@mui/material";


const HeroPage = ({tech}) => {
    return (
        <Box className={'container'}>
            <Box className={'row'}>
                <Box className="col-6">
                    <Box className="box">
                        <Typography variant={'h2'} className={'typography'}>
                            <span>An exciting place </span>
                            for the whole family to shop.
                        </Typography>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                            interested.
                        </p>
                        <Button variant={'contained'}>
                            SHOP NOW
                        </Button>
                    </Box>
                </Box>
                <Box className="col-6">
                    <Box className="box">
                        <img
                            src={require('../../assets/qwerty.png')}
                            alt=""/>
                    </Box>
                </Box>
            </Box>
            <Box className={'sponsors-icon'}>
                <img src={require('../../assets/cl_logo2.png')} alt=""/>
                <img src={require('../../assets/cl_logo4.png')} alt=""/>
                <img src={require('../../assets/cl_logo5.png')} alt=""/>
                <img src={require('../../assets/cl_logo7.png')} alt=""/>
            </Box>
            {
                tech.map(el =>
                <Box key={el.id}>
                    {el.title}
                </Box>
                )
            }
            <img src={tech[0]?.image} alt=""/>
            <img src={tech[1]?.image} alt=""/>
        </Box>
    );
};

export default HeroPage;