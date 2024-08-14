// //import { ModalidadeLivros } from "../model/ModalidadeLivros"
// //import { ModalidadeLivrosRepository, modalidadeLivrosList } from "../repository/ModalidadeLivrosRepository"

// export class ModalidadeLivrosService {
//     modalidadeLivrosRepository: ModalidadeLivrosRepository = new ModalidadeLivrosRepository();

//     cadastrarModalidade(modalidade: ModalidadeLivros) {
//         const existeNomeModalidade: boolean = modalidadeLivrosList.some((m) => m.nome === modalidade.nome)
//         if(modalidadeLivrosList.length < 3) {
//             const { nome, vegano } = modalidade
//             if (!nome || vegano === undefined) {
//                 throw new Error("Informações invalidas")
//             } else if (existeNomeModalidade) {
//                 throw new Error("Nome da modalidade já existe.")
//             }
//             const novaModalidade = new ModalidadeLivros(nome, vegano)
//             this.modalidadeLivrosRepository.insereModalidade(JSON.parse(JSON.stringify(novaModalidade)))
//             return novaModalidade
//         } else {
//             throw new Error("Número de modalidades atingida")
//         }
//     }

//     consultarModalidade(id: any): ModalidadeLivros | undefined {
//         const idNumber: number = parseInt(id, 10)
//         return this.modalidadeLivrosRepository.filtrarModalidadePorId(idNumber)
//     }

//     todasModalidade(): ModalidadeLivros[] {
//         return this.modalidadeLivrosRepository.filtrarTodasModalidades()
//     }

//     deletarModalidade(id: string) {
//         const idNumber = parseInt(id)
//         const modalidade = this.consultarModalidade(idNumber)
//         if (!modalidade) {
//             throw new Error("Modalidade não encontrada")
//         }

//         return this.modalidadeLivrosRepository.deletaModalidade(idNumber)
//     }

//     atualizarModalidade(modalidadeData: ModalidadeLivros): ModalidadeLivros {
//         const { id, nome, vegano } = modalidadeData
//         if (!nome || !vegano || !id) {
//             throw new Error("Informações incompletas")
//         }
//         let modalidadeEncontrada = this.consultarModalidade(id)
//         if (modalidadeEncontrada) {
//             modalidadeEncontrada.vegano = vegano
//             modalidadeEncontrada.nome = nome
//             this.modalidadeLivrosRepository.atualizaModalidade(modalidadeEncontrada)
//         } else {
//             throw new Error("Modalidade não encontrada!!!")
//         }
//         return modalidadeEncontrada
//     }
// }