import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


const MUICard = ({ product }) => {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>

                <Button size="small">Səbətə əlavə et</Button>
            </CardActions>
        </Card>

    )
}

export default MUICard
