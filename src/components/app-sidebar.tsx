import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarGroup,
  // SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  // SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
// import { ChevronDown, ChevronUp, Plus } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { AppItem } from "@/types/global-types"
import Link from 'next/link'

// https://ui.shadcn.com/docs/components/sidebar

export async function AppSidebar() {
  const host: string | undefined = process.env["HOST"]
  const response = await fetch(host + "/api/appdata?q=applist")
  const appList: AppItem[] = await response.json()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appList.map(v => (
                <SidebarMenuItem key={v.name}>
                  <SidebarMenuButton asChild>
                    <Link href={v.url}>
                      X
                      <span>{v.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}