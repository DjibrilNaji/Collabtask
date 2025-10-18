import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client"

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

export const updateUserById = async (id: string, data: Prisma.UserUpdateInput) =>
  await prisma.user.update({
    where: { id },
    data,
    select: { id: true, name: true, email: true }
  })
