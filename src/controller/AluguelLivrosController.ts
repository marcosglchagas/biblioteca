import { AluguelLivrosService } from '../service/AluguelLivrosService'
import { Request, Response } from 'express'

const aluguelLivrosService = new AluguelLivrosService()

export function insereAluguel(req: Request, res: Response) {
  try {
    const novaAluguel = AluguelLivrosService.insereAluguel(req.body)
    res.status(200).json({
      mensagem: "Novo item adicionado a Aluguel",
      item: novaAluguel
    })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }

}


export function listaAluguels(req: Request, res: Response) {
  try {
    res.status(200).json(AluguelLivrosService.todasAluguels())
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }
}