import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import api from '../../services/api'
import Navbar from '../../components/Header/index'
import {
  Container,
  SidebarListLi,
  SidebarList,
  Text,
  Content,
  ListMovies,
  SideBarLeft,
} from './styles'
import SideBarLeftmenu from '../../components/Sidebar/Sidebar'

const movies = [
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
]

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productsList, setProductsList] = useState([])

  async function getAllProducts() {
    const { data } = await api.get('/')
    setProductsList(data)
    return data
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <Container>
      <Navbar />
      <Content>
        <SideBarLeftmenu />
        <ListMovies>
          {movies.map((movie) => {
            return <Card image={movie.image} />
            // return <Card image={`https://ecomerce-api.herokuapp.com/files/${movie.image}`} />
          })}
        </ListMovies>
        <SideBarLeft>
          <SidebarList>
            <SidebarListLi>
              <Text>Filmes</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>Lord</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>Titanic</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>The Row</Text>
            </SidebarListLi>
          </SidebarList>
        </SideBarLeft>
      </Content>
    </Container>
  )
}
