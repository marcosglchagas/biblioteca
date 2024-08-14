import { AluguelLivros } from '../model/AluguelLivros'
import { AluguelLivrosRepository } from '../repository/AluguelLivrosRepository';
import { EstoqueLivrosService } from './EstoqueLivrosService'
//import { ModalidadeLivrosService } from './ModalidadeLivrosService'

export class AluguelLivrosService {
  AluguelLivrosRepository = new AluguelLivrosRepository()
  estoqueLivrosService = new EstoqueLivrosService()
  modalidadeLivrosService = new ModalidadeLivrosService()

  insereAluguel(Aluguel: AluguelLivros) {
   const {cpfCliente, itensAluguel} = Aluguel
   if(!cpfCliente || !itensAluguel) {
    throw new Error("Itens inválidos")
   }

   let valorTotal: number = 0
   let nomeModalidade: string | undefined;
   itensAluguel.map((item) => {
    const estoqueLivrosId = item.estoqueLivrosId
    const estoqueExiste = this.estoqueLivrosService.consultarEstoque(estoqueLivrosId)
    if(estoqueExiste && estoqueExiste.quantidade > item.quantidade) {
      valorTotal += item.quantidade * estoqueExiste.precoAluguel
      estoqueExiste.quantidade -= item.quantidade
    } else {
      throw new Error("Estoque de Livros não existe.")
    }
   })

   const novaAluguel = new AluguelLivros(cpfCliente, itensAluguel, valorTotal)
   this.AluguelLivrosRepository.insereAluguel(novaAluguel)
   return novaAluguel
  }


  todasAluguels(): AluguelLivros[] {
    return this.AluguelLivrosRepository.filtrarTodasAluguels()
}
}