import styled from 'styled-components'

export const Header = styled.div`
  background: #f99853;
  color: white;
  width: 100%;
  height: 60px;
  border: 1px solid #f77a22;
`

export const ListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 24px;
  /* padding-bottom: 4px; */
  padding-top: 26px;
  margin-top: -22px;
  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 24px;
  /* padding-bottom: 4px; */
  padding-top: 26px;
  @media screen and (max-width: 720px) {
    margin-top: 7px;
  }
`

export const HeaderText = styled.p`
  color: white;
  text-align: center;
  font-size: 16px;
  margin-right: 35px;
  cursor: pointer;
`
