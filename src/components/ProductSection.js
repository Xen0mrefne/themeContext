import { useContext, useEffect } from 'react'
import { themeContext } from '../context/ThemeContext'
import Product from './Product'


const ProductSection = () => {

    const { theme, setTheme } = useContext(themeContext)

    const products = [
        {
          id: 1,
          name: "chocolate",
        },
        {
          id: 2,
          name: "chococrispis",
        }
      ]


  useEffect(() => {
    const $producto = document.querySelectorAll(".product")
    for (const producto of $producto) {
      producto.classList.add(theme)
      if (theme === "theme-light"){
        producto.classList.remove("theme-dark")
      } else if (theme === "theme-dark") {
        producto.classList.remove("theme-light")
      }
    }
   
  }, [theme])
  
      

  return (
    <section>
        <ul className={'products'}>
            {products.map(product => <Product key={product.id} product={product} />)}
        </ul>
        <button onClick={() => {setTheme("theme-light")}}>Light</button>
        <button onClick={() => {setTheme("theme-dark")}}>Dark</button>
    </section>
  )
}

export default ProductSection