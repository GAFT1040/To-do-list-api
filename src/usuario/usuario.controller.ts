import { Request, Response } from "express";
import { UsuarioService } from "./usuario.service";

export class UsuarioController {
  private readonly service: UsuarioService = new UsuarioService();

  async registro(req: Request, res: Response) {
    const usuario = await this.service.criar(req.body);
    res.status(201).json({
      mensgem: `Usario ${usuario.nome} foi criado(a) com sucesso!`,
      usuario,
    });
    return;
  }
}
