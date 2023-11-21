// pages/api/editoras/index.ts
import { NextApiRequest, NextApiResponse } from 'next';

class ControleEditora {
    private editoras = [
        { codEditora: 1, nome: 'Alta Books' },
        { codEditora: 2, nome: 'Bookman' },
        { codEditora: 3, nome: 'Addison Wesley' },
        { codEditora: 4, nome: 'Pearson' }
    ];

    getEditoras() {
        return this.editoras;
    }
}

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } catch (e) {
            res.status(500).json({ error: 'Erro no servidor' });
        }
    } else {
        res.status(405).end();
    }
};
