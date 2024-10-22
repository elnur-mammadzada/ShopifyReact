import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid2';
import { Box, Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Product from '../ProductList/Product/Product';
import { removeFromBasket } from '../../../redux/slices/productSlice';


const Basket = () => {


    const data = useSelector((state) => state.product.basket)

    console.log(data)

    const handleDelete = (item) => {
        dispatch(removeFromBasket(item));
    };

    const dispatch = useDispatch();



    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {data.map(({ id, name, price }) => {
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

                                        <Button onClick={() => handleDelete({ id, name, price })} size="small" color='error' variant='outlined'>Səbətdən sil</Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default Basket
