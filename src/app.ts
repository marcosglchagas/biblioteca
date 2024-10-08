import express from 'express'
//import { atualizarModalidade, cadastrarModalidade, consultarModalidade, deletarModalidade, listaModalidades } from './controller/ModalidadeLivrosController'
import { insereEstoque, listaEstoques, consultarEstoque, atualizarEstoque, deletarQuantidadeEstoque  } from './controller/EstoqueLivrosController'
import { insereAluguel, listaAluguels } from './controller/AluguelLivrosController'


const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

function logInfo() {
  console.log(`API em execução no URL: http://localhost:${PORT}`)
}


/*ESTOQUES Livros*/
app.post('/api/estoque', insereEstoque)
app.get('/api/estoque/todos', listaEstoques)
app.get('/api/estoque/:id', consultarEstoque)
app.put('/api/estoque', atualizarEstoque)
app.delete('/api/estoque', deletarQuantidadeEstoque)

/*AluguelS Livros*/
app.post('/api/Aluguel', insereAluguel)
app.get('/api/Aluguel', listaAluguels)


app.listen(PORT, logInfo)