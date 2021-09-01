import styled from 'styled-components'

export const Container = styled.div`
  /* height: 180px; */
  height: 180px;
  width: 140px;
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0.5rem;
`
