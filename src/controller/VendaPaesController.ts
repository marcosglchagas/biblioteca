import { VendaLivrosService } from '../service/VendaLivrosService'
import { Request, Response } from 'express'

const vendaLivrosService = new VendaLivrosService()

export function insereVenda(req: Request, res: Response) {
  try {
    const novaVenda = vendaLivrosService.insereVenda(req.body)
    res.status(200).json({
      mensagem: "Novo item adicionado a venda",
      item: novaVenda
    })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }

}


export function listaVendas(req: Request, res: Response) {
  try {
    res.status(200).json(vendaLivrosService.todasVendas())
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }
}