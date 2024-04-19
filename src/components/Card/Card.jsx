import {
  CardContainer,
  CardImg,
  CardTitle,
  CardInfoContainer,
  CardPrice,
  CardRating,
  AddToCart
} from "./Card.styled"
const Card = ({ product }) => {
  console.log(product)
  return (
    <CardContainer>
      <CardImg src={product.image}/>
      <CardTitle>{product.title}</CardTitle>
      <CardInfoContainer>
        <CardPrice>{`$${product.price}`}</CardPrice>
        <CardRating>{`rating: ${product.rating.rate}`}</CardRating>
      </CardInfoContainer>
      <AddToCart>add to cart</AddToCart>
    </CardContainer>
  )
}
export default Card