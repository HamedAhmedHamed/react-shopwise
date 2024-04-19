import {
  ExclusiveProductsContainer,
  ProductContainer,
  ProductHeader,
  ProductCard,
  ProductThumbnail,
  ProductTitle,
  ProductPriceContainer,
  ProductPrice,
  ProductDiscountPrice
} from "./ExclusiveProducts.styled"
import Card from "../Card/Card"
import {useState, useEffect} from "react"

const ExclusiveProducts = ({ products }) => {

  const [exclusiveProducts, setExclusiveProducts] = useState([])
  useEffect(() => {
    setExclusiveProducts(products.filter(({rating }) => rating.rate > 4.4))
  } ,[products])
  
  return(
    <ExclusiveProductsContainer>
      <ProductHeader>exclusive products</ProductHeader>
      <ProductContainer>
        {
          exclusiveProducts.map((item, key) =>
            products.length != 0 && <Card product={item} key={key} />)
        }
      </ProductContainer>
    </ExclusiveProductsContainer>
  )
}

export default ExclusiveProducts