import { VendaLivros } from '../model/VendasLivros'
import { VendaLivrosRepository } from '../repository/VendaLivrosRepository';
import { EstoqueLivrosService } from './EstoqueLivrosService'
import { ModalidadeLivrosService } from './ModalidadeLivrosService'

export class VendaLivrosService {
  vendaLivrosRepository = new VendaLivrosRepository()
  estoqueLivrosService = new EstoqueLivrosService()
  modalidadeLivrosService = new ModalidadeLivrosService()

  insereVenda(venda: VendaLivros) {
   const {cpfCliente, itensVenda} = venda
   if(!cpfCliente || !itensVenda) {
    throw new Error("Itens inválidos")
   }

   let valorTotal: number = 0
   let nomeModalidade: string | undefined;
   itensVenda.map((item) => {
    const estoqueLivrosId = item.estoqueLivrosId
    const estoqueExiste = this.estoqueLivrosService.consultarEstoque(estoqueLivrosId)
    if(estoqueExiste && estoqueExiste.quantidade > item.quantidade) {
      valorTotal += item.quantidade * estoqueExiste.precoVenda
      estoqueExiste.quantidade -= item.quantidade
    } else {
      throw new Error("Estoque de pães não existe.")
    }
   })

   const novaVenda = new VendaLivros(cpfCliente, itensVenda, valorTotal)
   this.vendaLivrosRepository.insereVenda(novaVenda)
   return novaVenda
  }


  todasVendas(): VendaLivros[] {
    return this.vendaLivrosRepository.filtrarTodasVendas()
}
}