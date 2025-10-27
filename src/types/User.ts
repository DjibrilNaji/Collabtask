import { Task, TaskComment } from "@/types/Task"
import { WorkSpace, WorkSpaceMember, WorkspaceSummary } from "@/types/Workspace"

export type User = {
  id: string
  name: string
  email: string
  emailVerified: boolean
  createdAt: string
  image?: string
  Workspace?: WorkSpace[]
  WorkspaceMember?: WorkSpaceMember[]
  Task?: Task[]
  TaskComment?: TaskComment[]
}

export type UserProjectsSummary = {
  id: string
  name: string
  email: string
  image?: string
  createdAt: string
  Workspace: WorkspaceSummary[]
}
