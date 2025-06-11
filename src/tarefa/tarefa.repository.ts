import { PrismaClient } from "../generated/prisma";
import { ICriarTarefasDTO } from "./dtos/criar-tarefas.dto";

export class TarefaRepository {
  private readonly prisma = new PrismaClient();

  async buscarTodos(usuario_id: number) {
    return await this.prisma.tarefa.findMany({
      where: {
        usuario_id,
      },
    });
  }

  async buscarPorId(id: number, usuario_id: number) {
    return await this.prisma.tarefa.findFirst({
      where: {
        id,
        usuario_id,
      },
    });
  }

  async criar(dto: ICriarTarefasDTO, usuario_id: number) {
    return await this.prisma.tarefa.create({
      data: {
        ...dto,
        usuario_id,
      },
    });
  }
}
