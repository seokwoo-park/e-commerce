import { useState,useEffect } from 'react';
import { commerce } from './library/commerce'
import { Products, Navbar, Cart } from './components'
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
  
    setProducts(data)
  }

  const fetchCart = async () => {

    setCart(await commerce.cart.retrieve())
  }

  const handleAddCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)

    setCart(cart)
  }

  const handleCartQuantity = async (productID, quantity) => {
    const { cart } = await commerce.cart.update(productID, { quantity })

    setCart(cart)
  }

  const handleRemoveCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()

    setCart(cart)
  }

  useEffect(()=> {
    fetchProducts();
    fetchCart()
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddCart}/>
          </Route>

          <Route exact path="/cart">
            <Cart cart={cart} 
            handleCartQuantity = {handleCartQuantity}
            handleRemoveCart = {handleRemoveCart}
            handleEmptyCart = {handleEmptyCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
