import styled from "styled-components"

export const ExclusiveProductsContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
export const ProductContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 2rem;
  /* grid-column-gap: 0.2rem; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
`
export const ProductHeader = styled.h2`
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 700;
  text-transform: capitalize;
`
export const ProductCard = styled.div`
`
export const ProductThumbnail = styled.img`
`
export const ProductTitle = styled.h4`
`
export const ProductPriceContainer = styled.div`
 
`
export const ProductPrice = styled.p`
`
export const ProductDiscountPrice = styled.p`
`