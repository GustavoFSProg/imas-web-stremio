import { SidebarListLi, SidebarList, Text, SideBar } from './styles'

export default function SideBarLeftmenu() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <SideBar>
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
    </SideBar>
  )
}
