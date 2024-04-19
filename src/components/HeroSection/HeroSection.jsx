import { useState, useEffect } from "react"
import {
  HeaderContainer,
  ProductDetails,
  ProductPreview,
  ProductImg,
  AchievementsContainer,
  AchievementCell,
  Achievement,
  AchievementTitle,
  AchievementContent
} from "./HeroSection.styled"
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
  faTruck,
  faMoneyBills,
  faPhone,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons"
const HeroSection = ({ products }) => {
  const [randItem, setRandItem] = useState(0)
  const randomize = (items) => {
    return (Math.floor(Math.random() * items.length))
  }
  const duration = 2500
  useEffect(() => {
    if (products.length != 0) {
      const interval = setInterval(() => {
        setRandItem((randomize(products)))
      }
      , duration)
      return () => clearInterval(interval)
    }
  }, [products])
  return (
    <>
      <HeaderContainer
        style={{
          backgroundColor: randomize([0, 1]) === 0 ? "lightcyan" : "papayawhip"
        }}
      >
        <ProductDetails>
          <h2>{
            products.length != 0 && products[randItem].title
          }</h2>

          <p>{
            products.length != 0 && products[randItem].description
            // products.length != 0 && randItemDescription
          }</p>
        </ProductDetails>
        <ProductPreview>
          {products.length != 0 && <ProductImg src={products[randItem].image} alt={products[randItem].description} />}
        </ProductPreview>
      </HeaderContainer>

      <AchievementsContainer>
        <AchievementCell>
        <FontAwesomeIcon icon={faTruck} size="xl" style={{color: "FF324D"}} />
          <Achievement>
            <AchievementTitle>free delivery</AchievementTitle>
            <AchievementContent>worldwide</AchievementContent>
          </Achievement>
        </AchievementCell>

        <AchievementCell>
          <FontAwesomeIcon icon={faMoneyBills} size="xl" style={{color: "FF324D"}} />
          <Achievement>
            <AchievementTitle>money returns</AchievementTitle>
            <AchievementContent>30 Days money return</AchievementContent>
          </Achievement>
        </AchievementCell>

        <AchievementCell>
          <FontAwesomeIcon icon={faPhone} size="xl" style={{color: "FF324D"}} />
          <Achievement>
            <AchievementTitle>27/4 online support</AchievementTitle>
            <AchievementContent>Customer Support</AchievementContent>
          </Achievement>
        </AchievementCell>

        <AchievementCell>
          <FontAwesomeIcon icon={faShieldHalved} size="xl" style={{color: "FF324D"}} />
          <Achievement>
            <AchievementTitle>payment security</AchievementTitle>
            <AchievementContent>Safe Payment</AchievementContent>
          </Achievement>
        </AchievementCell>
      </AchievementsContainer>
    </>
  )
}
export default HeroSection