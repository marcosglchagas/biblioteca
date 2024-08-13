import { ModalidadeLivros } from '../model/ModalidadeLivros'

export const modalidadeLivrosList: ModalidadeLivros[] = []
export class ModalidadeLivrosRepository {

  insereModalidade(modalidade: ModalidadeLivros) {
    modalidadeLivrosList.push(modalidade)
  }

  filtrarModalidadePorId(id: number): ModalidadeLivros | undefined {
    return modalidadeLivrosList.find(modalidade => modalidade.id === id)
  }

  filtrarTodasModalidades(): ModalidadeLivros[] {
    return modalidadeLivrosList
  }

  deletaModalidade(id: number) {
    const index = modalidadeLivrosList.findIndex(modalidade => modalidade.id === id)

    if (index !== -1) {
      modalidadeLivrosList.splice(index, 1)
    }
  }

  atualizaModalidade(modalidade: ModalidadeLivros): number {
    const index = modalidadeLivrosList.indexOf(modalidade)
    if (index !== -1) {
      modalidadeLivrosList[index] = modalidade
    }
    return index
  }
}