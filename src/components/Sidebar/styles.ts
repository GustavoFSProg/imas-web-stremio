import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 57rem;
  background: #f66c09;

  @media screen and (max-width: 1050px) {
    height: 300rem;
  }
`

export const Text = styled.div`
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  color: white;
`

export const SidebarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  display: block;
  margin-left: -80px;
`

export const SidebarListLi = styled.li`
  margin-bottom: 20px;
  font-size: 16px;
  padding: 2px 2px 2px 2px;
  color: #b3b3b3;
  margin-left: 40px;
  cursor: pointer;

  &:hover {
    border: 2px solid gray;
    border-radius: 4px;
    background: purple;
  }
`

export const Header = styled.div`
  background: #2952a3;
  height: 50px;
  color: white;
  width: 100%;
  height: 60px;
`

export const Content = styled.div`
  display: flex;
  width: auto;
  height: 100%;
`

export const ListMovies = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  max-height: calc(100vh - 40px);
  margin-top: 17px;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 40px;
  padding-bottom: 4px;
  padding-top: 4px;
`
export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  gap: 0.5rem;

  width: 50%;
`

export const HeaderText = styled.p`
  color: white;
  text-align: center;
  font-size: 16px;
  margin-right: 35px;
`
export const SideBar = styled.div`
  display: flex;
  background: #f8893a;
  flex-direction: column;
  width: 153px;
  max-width: 175px;
  border-right: 2px solid #dd6108;

  /* min-width: 175px; */
  padding: 13px;
  height: 97%;
  color: white;
`
export const SideBarLeft = styled.div`
  display: flex;
  background: #f8893a;
  flex-direction: column;
  width: 153px;
  max-width: 175px;
  /* min-width: 175px; */
  padding: 13px;
  height: 97%;
  color: white;
  border-left: 2px solid #dd6108;

  @media screen and (max-width: 720px) {
    display: none;
  }
`
