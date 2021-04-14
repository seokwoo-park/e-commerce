import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({ checkoutToken }) => {

    // checkoutToken.live.line_items.map((product)=>{
    //     console.log(`${checkoutToken.live.line_items}`)
    // })

    console.log(checkoutToken.live.line_items)

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.sku} secondary={`${product.name} - x${product.quantity}`}/>
                        {/* <ListItemText primary={`Quantity: ${product.quantity}`}/> */}
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" style={{ fontWeight: 700}}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    )
}

export default Review
