import { SidebarListLi, SidebarList, Text, SideBar } from './styles'

export default function SideBarLeftmenu() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <SideBar>
      <SidebarList>
        <SidebarListLi>
          <Text>Mafalda</Text>
        </SidebarListLi>
        <SidebarListLi>
          <Text>Snoopy</Text>
        </SidebarListLi>
        <SidebarListLi>
          <Text>Chaves</Text>
        </SidebarListLi>
        <SidebarListLi>
          <Text>Chiquita</Text>
        </SidebarListLi>
      </SidebarList>
    </SideBar>
  )
}
