// components/LinhaLivro.tsx
import React from 'react';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (

    <tr>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>

      <td>
        <button onClick={excluir}>Excluir</button>
      </td>
    </tr>
  );
};
