import React from 'react'
import '../Header/Header.css'
import MUITextField from '../../../components/TextField/MUITextField'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';


const Header = () => {
    const navigate = useNavigate()
    return (

        <div className='header'>
            <div className='image'>
                <img className='logo' src="../src/assets/images/logo.png" alt="" />
            </div>
            <div className='navigation'>
                <div className='searchbar'>

                    <MUITextField className="mui-textfield" />
                </div>

                <div className='icon'>
                    <IconButton onClick={() => navigate("/basket")}>
                        <ShoppingCartIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
