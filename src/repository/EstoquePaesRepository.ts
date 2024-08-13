import { EstoqueLivros } from '../model/EstoqueLivros'

export const estoqueLivrosList: EstoqueLivros[] = []
export class EstoqueLivrosRepository {

  insereEstoque(itemEstoque: EstoqueLivros) {
    estoqueLivrosList.push(itemEstoque)
  }

  filtrarTodosEstoque() {
    return estoqueLivrosList
  }

  filtrarEstoquePorId(id: number): EstoqueLivros | undefined {
    return estoqueLivrosList.find(estoque => estoque.id === id)
  }

  atualizaEstoque(estoque: EstoqueLivros) {
    const index = estoqueLivrosList.indexOf(estoque)
    if (index !== -1) {
      estoqueLivrosList[index] = estoque
    }
    return index
  }
  }

