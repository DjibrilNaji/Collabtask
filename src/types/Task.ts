import { User } from "@/types/User"
import { WorkSpace } from "@/types/Workspace"

export type Task = {
  id: number
  title: string
  description?: string | null
  status: string
  priority: string
  due_date?: Date | null
  created_at: Date
  updated_at?: Date | null
  workspace_id: number
  workspace: WorkSpace
  TaskComment: TaskComment[]
}

export type TaskComment = {
  id: number
  task_id: number
  user_id: string
  content: string
  created_at: Date
  task: Task
  user: User
}
