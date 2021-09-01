import styled from 'styled-components'

export const Botao = styled.button`
  margin-top: '-23px';
  border: 0;
  background: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid white;
  border-radius: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 9px;
  padding-left: 9px;

  @media screen and (min-width: 720px) {
    display: none;
  }
`
export const MenuContainer = styled.div`
  display: ruby-base;
  justify-content: right;
  margin-top: -19px;
  margin-left: 20px;
`
