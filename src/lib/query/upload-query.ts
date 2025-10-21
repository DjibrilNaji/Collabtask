import { endOfMonth, startOfMonth } from "date-fns"

import prisma from "@/lib/prisma"

export const createUserUpload = async (userId: string) => {
  await prisma.userUpload.create({ data: { userId } })
}

export const getUserUploadsCountByUserId = async (userId: string) =>
  await prisma.userUpload.count({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth(new Date()),
        lte: endOfMonth(new Date())
      }
    }
  })
