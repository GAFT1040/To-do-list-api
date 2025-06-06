import { PrismaClient, Usuario } from "../generated/prisma";
import { IRegistroDTO } from "./dtos/registro.dtos";

export class UsuarioRepository {
  private readonly prisma = new PrismaClient();

  async buscarPorEmail(data: String) {
    return await this.prisma.usuario.findFirst({
      where: {
        email: data.toLowerCase(),
      },
    });
  }

  async criar(data: IRegistroDTO) {
    return await this.prisma.usuario.create({ data });
  }
}
