import prisma from "@/lib/prisma"

export const createWorkspace = async (
  data: { name: string; description: string },
  userId: string
) => {
  await prisma.workspace.create({
    data: {
      name: data.name,
      description: data.description,
      slug: data.name.toLowerCase().replace(/\s+/g, "-"),
      owner_id: userId
    }
  })
}
