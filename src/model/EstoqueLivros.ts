import { generateId } from '../utils/generateId'

export class EstoqueLivros {
  id: number
 // modalidadeId: number
  quantidade: number
  precoAluguel: number

  constructor(quantidade: number, precoAluguel: number) {
    this.id = generateId()
   // this.modalidadeId = modalidadeId
    this.quantidade = quantidade
    this.precoAluguel = precoAluguel
  }
}