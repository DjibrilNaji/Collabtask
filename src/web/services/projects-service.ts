import { UserProjectsSummary } from "@/types/User"
import { routes } from "@/web/routes"
import apiClient from "@/web/services/api-client"

export const projectService = {
  async getById(id: string): Promise<UserProjectsSummary> {
    const { data } = await apiClient.get(routes.api.userProjectsSummary(id))
    return data
  }
}
