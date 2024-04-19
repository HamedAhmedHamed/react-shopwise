import styled from "styled-components"

export const StyledNavbar = styled.nav`
  margin: 0 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row nowrap;
  /* position: fixed; */

  @media (max-width: 620px){
    margin: 0 10px;
    flex-flow: column nowrap;
  }
  @media (max-width: 820px){
    margin: 20px;
  }
`
export const StyledLogo = styled.img`
  padding: 10px 0;
`
export const StyledDropDownContainer = styled.ul`
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  list-style: none;
`
export const StyledDropDown = styled.li`
  position: relative;
  &:hover .dropdown-content{
    // dropdown logic here
    display: inline-block ;
  }
`
export const StyledDropDownTitle = styled.p`
  padding: 20px 30px 20px 0;
  cursor: pointer;
  transition: 150ms;
  text-transform: uppercase;
  &:hover {
    color: #FF324D;
  }
`
export const StyledDropDownList = styled.ul`
  display: none;
  width: 200px;
  position: absolute;
  top: 60px;
  left: 0;
  text-transform: capitalize;
  background-color: #e9ecef;;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.05);
  transition: 200ms;
  & li {
    padding: 7px 20px;
    transition: 150ms;
    cursor: pointer
  }
  & li:hover {
    color: #FF324D;
  }
` 
export const StyledDropDownProductsContainer = styled.div`
  display: none;
  width: 70vw;
  position: absolute;
  top: 60px;
  right: -300px;
`
export const StyledDropDownProducts = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e9ecef;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.05);
`
export const StyledDropDownProductsList= styled.ul`
  margin: 12px 0;
  padding: 0 12px;
  display: flex;
  flex-flow: column nowrap;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  cursor: default;
  &:not(:first-child) {
    border-left: 1px solid #FF324D;
  }
  & li:not(:first-child) {
    transition: 150ms;
    cursor: pointer
  }
  & li:not(:first-child):hover {
    color: #FF324D;
  }
`
export const StyledDropDownProductsTitle = styled.li`
  text-transform: uppercase;
  font-weight: bold;
`
export const StyledDropDownProductsItem = styled.li`
`