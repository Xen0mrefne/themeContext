import { useContext } from 'react'
import { themeContext } from '../context/ThemeContext'

const Product = ({product}) => {

  const { theme } = useContext(themeContext)

  const { name } = product

  return (
    <div className={`product`}>
      <span>{name}</span>
    </div>
  )
}

export default Product