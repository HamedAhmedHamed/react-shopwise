import { useState, useEffect } from "react"
import { GlobalStyles } from "./components/GlobalStyles.styled"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import MainPage from "./pages/MainPage"
import HeroSection from "./components/HeroSection/HeroSection"
import ExclusiveProducts from "./components/ExclusiveProducts/ExclusiveProducts"

function App() {
  const API = "https://fakestoreapi.com"
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [mensClothingproducts, setMensClothingProducts] = useState([])
  const [womensClothingProducts, setWomenClothingProducts] = useState([])
  const [jeweleryProducts, setJeweleryProducts] = useState([])
  const [electronicsProducts, setElectronicsProducts] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(`${API}/products`)
      const data = await res.json()
      setProducts(data)
    }
    const fetchCategories = async () => {
      const res = await fetch(`${API}/products/categories`)
      const data = await res.json()
      setCategories(data)
    }

    fetchItems()
    fetchCategories()
  }, [])

  useEffect(() => {
    const menCategory = products.filter(({ category }) => category === "men's clothing")
    setMensClothingProducts(menCategory)

    const womenCategory = products.filter(({ category }) => category === "women's clothing")
    setWomenClothingProducts(womenCategory)

    const jeweleryCategory = products.filter(({ category }) => category === "jewelery")
    setJeweleryProducts(jeweleryCategory)

    const electronicsCategory = products.filter(({ category }) => category === "electronics")
    setElectronicsProducts(electronicsCategory)

  }, [categories])


  return (
      <>
        <GlobalStyles />
        <Navbar
          categories={categories}
          mensClothingproducts={mensClothingproducts}
          womensClothingProducts={womensClothingProducts}
          jeweleryProducts={jeweleryProducts}
          electronicsProducts={electronicsProducts}
        />
        <Routes>
          <Route path="/" element={<MainPage products={products}/>} />
        </Routes>
        {/* <HeroSection products={products} />
        <ExclusiveProducts products={products} /> */}
      </>
    )
}

export default App
