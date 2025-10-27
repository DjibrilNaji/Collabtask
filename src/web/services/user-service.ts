import { User } from "@/types/User"
import { routes } from "@/web/routes"
import apiClient from "@/web/services/api-client"

export const userService = {
  async getById(id: string): Promise<User> {
    const { data } = await apiClient.get(routes.api.userById(id))
    return data
  },

  async updateById(id: string, userData: Partial<User>): Promise<User> {
    const { data } = await apiClient.put(routes.api.userById(id), userData)
    return data
  }
}
