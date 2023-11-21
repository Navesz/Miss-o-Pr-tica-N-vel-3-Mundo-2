// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next';

class ControleLivro {
  private livros = []; 

  obterLivros() {
    return this.livros;
  }

  incluir(livro) {
    this.livros.push(livro);
    return livro;
  }

  excluir(codigo) {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index > -1) {
      return this.livros.splice(index, 1)[0]; // Remove e retorna o livro excluído
    }
    return null; 
  }
}

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const novoLivro = controleLivro.incluir(req.body);
      res.status(200).json({ message: 'Livro adicionado com sucesso', livro: novoLivro });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
