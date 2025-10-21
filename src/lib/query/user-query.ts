import prisma from "@/lib/prisma"

export const getUserById = async (id: string) =>
  await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      image: true,
      createdAt: true
    }
  })
