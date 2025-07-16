"user server"

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const user = await db.tbUsuario.create({
      data: {
        nome: data.name,
        email: data.email,
        senha: data.password,
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
