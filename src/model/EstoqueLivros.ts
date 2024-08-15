import { generateId } from '../utils/generateId'

export class EstoqueLivros {
  id: number
  quantidade: number
  precoAluguel: number

  constructor(quantidade: number, precoAluguel: number) {
    this.id = generateId()
    this.quantidade = quantidade
    this.precoAluguel = precoAluguel
  }
}