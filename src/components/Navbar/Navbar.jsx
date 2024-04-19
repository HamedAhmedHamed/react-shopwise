// import { useEffect, useState } from "react"
import {
  StyledLogo,
  StyledNavbar,
  StyledDropDownContainer,
  StyledDropDown,
  StyledDropDownTitle,
  StyledDropDownList,
  StyledDropDownProducts,
  StyledDropDownProductsContainer,
  StyledDropDownProductsList,
  StyledDropDownProductsTitle,
  StyledDropDownProductsItem
} from "./Navbar.styled"
import { Link } from "react-router-dom"
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons"
import {
  faCartShopping
} from "@fortawesome/free-solid-svg-icons"
import logo from "../../assets/logo_dark.png"

const Navbar = ({ categories, mensClothingproducts, womensClothingProducts, jeweleryProducts, electronicsProducts }) => {
  {/*
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
    const menCategory = products.filter(({ category }) => category == "men's clothing")
    setMensClothingProducts(menCategory);

    const womenCategory = products.filter(({ category }) => category == "women's clothing")
    setWomenClothingProducts(womenCategory)

    const jeweleryCategory = products.filter(({ category }) => category == "jewelery")
    setJeweleryProducts(jeweleryCategory)

    const electronicsCategory = products.filter(({ category }) => category == "electronics")
    setElectronicsProducts(electronicsCategory)

    // console.log(mensClothingproducts)
    // console.log(womensClothingProducts)
    // console.log(jeweleryProducts)
    // console.log(electronicsProducts)
  }, [categories])
  */}

  return (
    <StyledNavbar>
      <StyledLogo src={logo} alt="logo" />

      <StyledDropDownContainer>
        <StyledDropDown>
          <StyledDropDownTitle>
            categories
            <FontAwesomeIcon icon={faAngleDown} />
          </StyledDropDownTitle>
          <StyledDropDownList className="dropdown-content">
            {
              categories.map((category, key) => <li key={key}><Link to="/CategoryPage">{category}</Link></li>)
            }
          </StyledDropDownList>
        </StyledDropDown>

        <StyledDropDown>
          <StyledDropDownTitle>
            pages
            <FontAwesomeIcon icon={faAngleDown} />
          </StyledDropDownTitle>
          <StyledDropDownList className="dropdown-content">
            <li>about us</li>
            <li>contact us</li>
            <li>404 error page</li>
            <li>register</li>
            <li>terms and conditions</li>
          </StyledDropDownList>
        </StyledDropDown>

        <StyledDropDown>
          <StyledDropDownTitle>
            products
            <FontAwesomeIcon icon={faAngleDown} />
          </StyledDropDownTitle>

          <StyledDropDownProductsContainer className="dropdown-content">
            <StyledDropDownProducts>
              {
                categories.map((category, key) =>
                  <StyledDropDownProductsList key={key}>
                    <StyledDropDownProductsTitle>{category}</StyledDropDownProductsTitle>
                    {
                      jeweleryProducts.map((item, key) => item.category === category && <StyledDropDownProductsItem key={key}>{item.title}</StyledDropDownProductsItem>)
                    }

                    {
                      electronicsProducts.map((item, key) => item.category === category && <StyledDropDownProductsItem key={key}>{item.title}</StyledDropDownProductsItem>)
                    }
                    {
                      mensClothingproducts.map((item, key) => item.category === category && <StyledDropDownProductsItem key={key}>{item.title}</StyledDropDownProductsItem>)
                    }
                    {
                      womensClothingProducts.map((item, key) => item.category === category && <StyledDropDownProductsItem key={key}>{item.title}</StyledDropDownProductsItem>)
                    }
                  </StyledDropDownProductsList>)
              }
            </StyledDropDownProducts>

          </StyledDropDownProductsContainer>

        </StyledDropDown>

      </StyledDropDownContainer>

      <FontAwesomeIcon
        icon={faCartShopping} size="lg" style={{ color: "FF324D" }} />
    </StyledNavbar>
  )
}

export default Navbar