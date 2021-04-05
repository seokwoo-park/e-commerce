import React from 'react'
import {Grid} from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: "https://www.apple.com/v/macbook-pro-16/c/images/meta/og__csakh451i0eq_large.png"},
    { id: 2, name: 'MacBook', description: 'Apple macbook.', price: '$10', image: "https://www.apple.com/v/macbook-pro-16/c/images/meta/og__csakh451i0eq_large.png"},
]

const Products = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
           <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid> 
        </main>
    )
}

export default Products
