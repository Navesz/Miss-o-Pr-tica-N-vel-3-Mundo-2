// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const codEditora = parseInt(req.query.codEditora as string);
            const editora = controleEditora
                .getEditoras()
                .find((e) => e.codEditora === codEditora); 

            if (editora) {
                res.status(200).json(editora);
            } else {
                res.status(404).json({ error: 'Editora não encontrada' });
            }
        } catch (e) {
            res.status(500).json({ error: 'Erro no servidor' });
        }
    } else {
        res.status(405).end();
    }
};
