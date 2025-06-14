export interface ICriarTarefasDTO {
  titulo: string;
  descricao: string;
  prioridade: "BAIXA" | "NORMAL" | "ALTA";
}
