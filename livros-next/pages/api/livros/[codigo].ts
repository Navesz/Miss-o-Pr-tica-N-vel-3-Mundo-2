// pages/api/livros/[codigo].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const codigo = parseInt(req.query.codigo as string);
      const livroExcluido = controleLivro.excluir(codigo);
      if (livroExcluido) {
        res.status(200).json({ message: 'Livro excluído com sucesso', livro: livroExcluido });
      } else {
        res.status(404).json({ message: 'Livro não encontrado' });
      }
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (e) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
