import { styled } from "styled-components"

export const HeaderContainer = styled.header`
  /* background-color: lightcyan; */
  height: 650px;
  /* display: flex;
  align-items: center;
  justify-content: space-evenly; */
  display: grid;
  grid-template-columns: 2fr 1fr;
`
export const ProductDetails = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 2rem;
  /* align-items: flex-start; */
  h2 {
    width: 300px;
  }
  p {
    width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const ProductPreview= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProductImg = styled.img`
  /* width: 400px; */
  height: 400px;
  mix-blend-mode: multiply;
`
export const AchievementsContainer = styled.section`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`
export const AchievementCell = styled.div`
  border: 1px solid #ddd;
  margin-left: -1px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
export const Achievement = styled.div`
`
export const AchievementTitle = styled.h5`
  text-transform: capitalize;
`
export const AchievementContent = styled.p`
  text-transform: capitalize;
`