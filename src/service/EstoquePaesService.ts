import { modalidadeLivrosList } from '../repository/ModalidadeLivrosRepository'
import { EstoqueLivrosRepository, estoqueLivrosList } from '../repository/EstoqueLivrosRepository'
import { EstoqueLivros } from '../model/EstoqueLivros'

export class EstoqueLivrosService {
  estoqueLivrosRepository: EstoqueLivrosRepository = new EstoqueLivrosRepository()

  insereEstoque(itemEstoque: EstoqueLivros) {
    const { quantidade, precoAluguel } = itemEstoque

    if ( !quantidade || !precoAluguel) {
      throw new Error("Informações incompletas")
    }


    const novoEstoque = new EstoqueLivros(modalidadeId, quantidade, precoAluguel)
    //const existeModalidade = modalidadeLivrosList.find((modalidade) => modalidade.id === modalidadeId)
    const existeEstoque = estoqueLivrosList.find((estoque) => estoque.modalidadeId === modalidadeId)
    // if (existeModalidade && !existeEstoque) {
    //   this.estoqueLivrosRepository.insereEstoque(novoEstoque)
    // } else {
    //   throw new Error("Modalidade não existe")
    // // }

    // return novoEstoque

  }

  todosEstoques() {
    return this.estoqueLivrosRepository.filtrarTodosEstoque()
  }

  consultarEstoque(id: any): EstoqueLivros | undefined {
    const idNumber: number = parseInt(id, 10)
    return this.estoqueLivrosRepository.filtrarEstoquePorId(idNumber)
}

deletarQuantidadeEstoque(estoqueData: EstoqueLivros) {
  const { id, quantidade, precoAluguel } = estoqueData

  if(!id || !quantidade || !precoAluguel) {
    throw new Error("Informaçãoes incompletas")
  }

  let estoqueEncontrado = this.consultarEstoque(id)
  if(estoqueEncontrado) {
    if(estoqueEncontrado.id < quantidade) {
      throw new Error("Quantidade informada é superior ao que existe em estoque.")
    } else {
      estoqueEncontrado.quantidade -= quantidade
      this.estoqueLivrosRepository.atualizaEstoque(estoqueEncontrado)
    }
  } else {
    throw new Error("Estoque não encontrado!!!")
  }

  return estoqueEncontrado

}


  atualizarEstoque(estoqueData: EstoqueLivros) {
    const { id, quantidade, precoAluguel } = estoqueData

    if(!id || !quantidade || !precoAluguel) {
      throw new Error("Informaçãoes incompletas")
    }

    let estoqueEncontrado = this.consultarEstoque(id)
    if(estoqueEncontrado) {
      estoqueEncontrado.quantidade += quantidade
      this.estoqueLivrosRepository.atualizaEstoque(estoqueEncontrado)
    } else {
      throw new Error("Estoque não encontrado!!!")
    }

    return estoqueEncontrado

  }
}