import HeroSection from "../components/HeroSection/HeroSection"
import ExclusiveProducts from "../components/ExclusiveProducts/ExclusiveProducts"

const MainPage = ({ products }) => {
  return (
    <>
      <HeroSection products={products} />
      <ExclusiveProducts products={products} />
    </>
  )
}

export default MainPage