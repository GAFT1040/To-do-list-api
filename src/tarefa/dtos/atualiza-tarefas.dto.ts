import { ICriarTarefasDTO } from "./criar-tarefas.dto";

export interface IAtualizarTarefasDTO extends Partial<ICriarTarefasDTO> {
  completa?: boolean;
}
