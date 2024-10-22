import React, { useDeferredValue } from 'react'
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBasketData } from '../../../../redux/slices/productSlice';



const Product = ({ productData }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.basket)

    const handleClick = (item) => {

        dispatch(setBasketData(item))

    }


    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {productData.map(({ id, name, price }) => {
                    return (
                        <Grid key={id} size={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="../src/assets/images/iphone.png"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {price}
                                    </Typography>

                                </CardContent>
                                <CardActions>

                                    <Button onClick={() => handleClick({ id, name, price })} size="small">Səbətə əlavə et</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Product
