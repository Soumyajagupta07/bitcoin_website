// import React from 'react'
import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
// import { purple } from '@mui/material/colors';
import GridViewIcon from '@mui/icons-material/GridView';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import '../CSS/BodyMidInfo.css'
import { orange } from '@mui/material/colors';

const BodyMidInfo = () => {
    const BootstrapButton1 = styled(Divider)({
        height: '20px',
        width: '120px',
        borderRadius: '15px',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 12,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#f2d3c4',
        borderColor: '#f2d3c4',
        color: 'orange',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });
    return (
        <div>
            <h1>1NDyJ-obu1s</h1>
            <Stack spacing={2} direction="row">
                {/* <ColorButton variant="contained">Custom CSS</ColorButton> */}
                <BootstrapButton1 variant="contained" disableRipple>
                    👜 Base58 (P2PKH)
                </BootstrapButton1>
            </Stack>
            <div className='address'>
                <GridViewIcon sx={{ backgroundColor: orange[300] , color: orange[50], height: '50px', width: '40px'}}/>
                <div className='address_info'>
                    <p>Bitcoin Address</p>
                    <div className='bit_id'>
                        <p>1NDyJtNTjmwk5xPNhjgAMuAHDHigtobuis</p>
                        <ContentCopyIcon />
                    </div>

                </div>
            </div>

        </div>
    )
}
export default BodyMidInfo;