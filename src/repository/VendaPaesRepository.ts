import { VendaLivros } from '../model/VendasLivros'

const vendaLivrosList: VendaLivros[] = []


export class VendaLivrosRepository {
  insereVenda(venda: VendaLivros) {
    vendaLivrosList.push(venda)
  }

  filtrarTodasVendas(): VendaLivros[] {
    return vendaLivrosList
  }
}