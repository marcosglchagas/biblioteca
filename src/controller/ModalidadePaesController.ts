// import { Request, Response } from 'express'
// import { ModalidadeLivrosService } from '../service/ModalidadeLivrosService'

// const modalidadeLivrosService = new ModalidadeLivrosService()

// export function cadastrarModalidade(req: Request, res: Response) {
//   try {
//     const novaModalidade = modalidadeLivrosService.cadastrarModalidade(req.body)
//     res.status(201).json({
//       mensagem: "Modalidade adicionada com sucesso!",
//       modalidade: novaModalidade
//     })
//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })
//   }
// }

// export function consultarModalidade(req: Request, res: Response) {
//   try {
//     const modalidade = modalidadeLivrosService.consultarModalidade(req.params.id)
//     if (modalidade) {
//       res.status(200).json({
//         mensagem: "Modalidade encontrada com sucesso!",
//         modalidade: modalidade
//       })
//       return true
//     } else {
//       res.status(400).json({ mensagem: "Modalidade não encontrada" })
//     }
//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })

//   }
// }

// export function listaModalidades(req: Request, res: Response) {
//   try {
//     res.status(200).json(modalidadeLivrosService.todasModalidade())
//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })
//   }
// }

// export function deletarModalidade(req: Request, res: Response) {
//   try {
//     const modalidade = modalidadeLivrosService.consultarModalidade(req.params.id)
//     if (modalidade) {
//       modalidadeLivrosService.deletarModalidade(req.params.id)
//       res.status(202).json({
//         mensagem: "Modalidade excluida com sucesso!",
//         modalidadeDeletada: modalidade
//       })
//     } else {
//       res.status(400).json({ mensagem: "Modalidade não encontrada" })
//     }
//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })
//   }
// }

// export function atualizarModalidade(req: Request, res: Response) {
//   try {
//     const novaModalidade = modalidadeLivrosService.atualizarModalidade(req.body)
//     res.status(200).json({
//       mensagem: "Modalidade atualizada com sucesso!!!",
//       novaModalidade: novaModalidade
//     })

//   } catch (error: any) {
//     res.status(400).json({ mensagem: error.message })
//   }
// }
