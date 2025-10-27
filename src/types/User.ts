import WorkSpace from "@/types/Workspace"

type User = {
  id: string
  name: string
  email: string
  emailVerified: boolean
  createdAt: string
  image?: string
  Workspace?: WorkSpace[]
}

export default User
