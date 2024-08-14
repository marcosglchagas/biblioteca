import { generateId } from '../utils/generateId'
import { ItemAluguel } from './ItemAluguel'

export class AluguelLivros {
  id: number
  cpfCliente: string
  valorTotal: number
  itensAluguel: Array<ItemAluguel> = []

  constructor(cpfCliente: string, itensAluguel: ItemAluguel[], valorTotal: number ) {
    this.id = generateId()
    this.cpfCliente = cpfCliente
    this.valorTotal =  valorTotal
    this.itensAluguel = itensAluguel
  }

}