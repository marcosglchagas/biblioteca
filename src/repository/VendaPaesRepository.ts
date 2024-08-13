import { AluguelLivros } from '../model/AluguelsLivros'

const AluguelLivrosList: AluguelLivros[] = []


export class AluguelLivrosRepository {
  insereAluguel(Aluguel: AluguelLivros) {
    AluguelLivrosList.push(Aluguel)
  }

  filtrarTodasAluguels(): AluguelLivros[] {
    return AluguelLivrosList
  }
}