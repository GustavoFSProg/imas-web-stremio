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

// const movies = [
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
//   {
//     title: 'o Titulo',
//     image: 'https://source.unsplash.com/random',
//   },
// ]

// interface IProducts {
//   _id: string
//   title: string
//   price: number
//   description: string
//   image: string
// }

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productsList, setProductsList]: any = useState([])
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
          {productsList.map((item: any) => {
            return (
              <div
                key={item._id}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Card image={`https://imas-api.herokuapp.com/files/${item.image}`} />
                <p
                  style={{
                    fontSize: '16px',
                    color: '#d9d9d9',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {item.title}
                  <span style={{ color: '#cccccc', marginTop: '7px' }}>R$ {item.price}</span>
                </p>
              </div>
            )
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
