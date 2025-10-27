import { AppSidebar } from "@/web/components/customs/Dashboard/AppSidebar/AppSidebar"
import { SidebarProvider } from "@/web/components/ui/sidebar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  )
}
