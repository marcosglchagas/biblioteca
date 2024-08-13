import { VendaLivros } from './VendasLivros'

export class ItemVenda {
  estoqueLivrosId: number
  quantidade: number

  constructor(estoqueLivrosId: number, quantidade: number) {
    this.estoqueLivrosId = estoqueLivrosId
    this.quantidade = quantidade
  }
}