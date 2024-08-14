import { AluguelLivros } from './AluguelLivros'

export class ItemAluguel {
  estoqueLivrosId: number
  quantidade: number

  constructor(estoqueLivrosId: number, quantidade: number) {
    this.estoqueLivrosId = estoqueLivrosId
    this.quantidade = quantidade
  }
}