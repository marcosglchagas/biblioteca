import { Request, Response } from 'express'
import { EstoqueLivrosService } from '../service/EstoqueLivrosService'

export const estoqueLivrosService = new EstoqueLivrosService()

export function consultarEstoque(req: Request, res: Response) {
  try {
    const estoque = estoqueLivrosService.consultarEstoque(req.params.id)
    if (estoque) {
      res.status(200).json({
        mensagem: "Estoque encontrado com sucesso!",
        itemEstoque: estoque
      })
      return true
    } else {
      res.status(400).json({ mensagem: "Estoque não encontrado" })
    }
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })

  }
}

export function insereEstoque(req: Request, res: Response) {
  try {
    const novoEstoque = estoqueLivrosService.insereEstoque(req.body)
    res.status(200).json({
      mensagem: "Novo item adicionado ao estoque",
      item: novoEstoque
    })
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }

}
export function listaEstoques(req: Request, res: Response) {
  try {
    res.status(200).json(estoqueLivrosService.todosEstoques())
  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }

}
export function atualizarEstoque(req: Request, res: Response) {
  try {
    const novoEstoque = estoqueLivrosService.atualizarEstoque(req.body)
    res.status(200).json({
      mensagem: "Quantidade atualizada com sucesso!!!",
      novoEstoque: novoEstoque
    })

  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }
}

export function deletarQuantidadeEstoque(req: Request, res: Response) {
  try {
    const novoEstoque = estoqueLivrosService.deletarQuantidadeEstoque(req.body)
    res.status(200).json({
      mensagem: "Quantidade atualizada com sucesso!!!",
      novoEstoque: novoEstoque
    })

  } catch (error: any) {
    res.status(400).json({ mensagem: error.message })
  }
}