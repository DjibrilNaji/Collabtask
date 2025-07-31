import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      password_hash: "hashed_password_1",
      is_verified: true,
      avatar_url: "https://example.com/avatar/alice.png"
    }
  })

  const bob = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@example.com",
      password_hash: "hashed_password_2",
      is_verified: false
    }
  })

  await prisma.emailVerificationCode.create({
    data: {
      user_id: bob.id,
      code: "ABC123",
      expires: new Date(Date.now() + 1000 * 60 * 60)
    }
  })

  const workspace = await prisma.workspace.create({
    data: {
      name: "TaskBuddy Project",
      description: "Projet de gestion collaborative",
      owner_id: alice.id
    }
  })

  await prisma.workspaceMember.createMany({
    data: [
      { user_id: alice.id, workspace_id: workspace.id },
      { user_id: bob.id, workspace_id: workspace.id }
    ]
  })

  const task1 = await prisma.task.create({
    data: {
      title: "Configurer l'authentification",
      description: "Mettre en place la logique de login/signup",
      priority: "high",
      status: "in_progress",
      workspace_id: workspace.id
    }
  })

  await prisma.task.create({
    data: {
      title: "Créer les modèles Prisma",
      status: "pending",
      priority: "medium",
      workspace_id: workspace.id
    }
  })

  await prisma.taskComment.create({
    data: {
      task_id: task1.id,
      user_id: alice.id,
      content: "J’ai commencé à bosser sur l’authentification !"
    }
  })

  await prisma.taskComment.create({
    data: {
      task_id: task1.id,
      user_id: bob.id,
      content: "Tu veux que je m’occupe de la page de login ?"
    }
  })
}

main()
  .then(() => {
    console.log("✅ Données insérées avec succès")
    return prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
