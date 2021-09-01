import { Link } from 'react-router-dom'
import { SidebarListLi, SidebarList, Text, SideBar } from './styles'

export default function SideBarLeftmenu() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <SideBar>
      <SidebarList>
        <SidebarListLi>
          <Link to="/dois" style={{ textDecoration: 'none' }}>
            <Text>Mafalda</Text>
          </Link>
        </SidebarListLi>
        <SidebarListLi>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Text>Snoopy</Text>
          </Link>
        </SidebarListLi>
        <SidebarListLi>
          <Link to="/dois" style={{ textDecoration: 'none' }}>
            <Text>Chaves</Text>
          </Link>
        </SidebarListLi>
        <SidebarListLi>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Text>Chiquita</Text>
          </Link>
        </SidebarListLi>
      </SidebarList>
    </SideBar>
  )
}
