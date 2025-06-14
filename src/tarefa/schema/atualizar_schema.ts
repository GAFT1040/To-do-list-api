import Joi from "joi";

const atualiza_tarefa_schema = Joi.object({
  titulo: Joi.string().min(3).max(250),
  descricao: Joi.string().min(3).max(250),
  prioridade: Joi.string().valid("BAIXA", "NORMAL", "ALTA"),
  completa: Joi.boolean(),
});
export default atualiza_tarefa_schema;
