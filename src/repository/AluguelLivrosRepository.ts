import { AluguelLivros } from '../model/AluguelLivros'

const AluguelLivrosList: AluguelLivros[] = []


export class AluguelLivrosRepository {
  insereAluguel(Aluguel: AluguelLivros) {
    AluguelLivrosList.push(Aluguel)
  }

  filtrarTodasAluguels(): AluguelLivros[] {
    return AluguelLivrosList
  }
}