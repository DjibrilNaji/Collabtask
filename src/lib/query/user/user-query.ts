import prisma from "@/lib/prisma"
import User from "@/types/User"

export const getUserById = async (id: string) =>
  await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      avatar_url: true,
      createdAt: true
    }
  })

export const updateUserById = async (id: string, data: Partial<User>) =>
  await prisma.user.update({
    where: { id },
    data
  })
