import prisma from "@/lib/prisma"

export const createWorkspace = async (
  data: { name: string; description: string },
  userId: string
) => {
  await prisma.workspace.create({
    data: {
      name: data.name,
      description: data.description,
      slug: data.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
      owner_id: userId
    }
  })
}
