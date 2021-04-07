import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

const CartItem = ({ item, handleCartQuantity, handleRemoveCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="body1">{item.sku}</Typography>
                <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleCartQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Typography variant="h5">{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleCartQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=> handleRemoveCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem